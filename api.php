<?php
include 'connection.php';

switch ($_REQUEST['g']) {
    case "main":
	    $result = $conn->query("select L.Nume as Luna, P.Pret_Produs, P.Pret_Prognoza, P.Pret_Plafon, P.An from preturi_benzina P left join luna L on L.ID_Luna = P.ID_Luna where P.ID_Produs = (select ID_Produs from Produse where Nume_Produs='A95')");
	    
        break;
    case 1:
        $month = $_REQUEST["m"];
        $year = $_REQUEST["y"];
        $result = $conn->query("select L.Nume as Luna, P.Pret_Produs, P.Pret_Plafon, B.Nr_Statii, P.An from ((preturi_benzina P left join luna L on L.ID_Luna = P.ID_Luna) left join (select SUM(Nr_statii) as Nr_statii, An from nr_benzinarii group by An) as B on P.An = B.An) where P.ID_Produs = (select ID_Produs from Produse where Nume_Produs='A95') and P.ID_Luna=$month and P.An = $year group by B.An");
        break;
    case 2:
        $month1 = $_REQUEST["m"];
        $month2 = @$_REQUEST["m2"] ? $_REQUEST["m2"] : ((int)$month1-3 > 0 ? (int)$month1-3 : 1);
        $year = $_REQUEST["y"];
        $result = $conn->query("select L.Nume as Luna, P.Pret_Produs, P.An from preturi_benzina P, luna L where P.ID_Produs = (select ID_Produs from Produse where Nume_Produs='A95') and P.ID_Luna=L.ID_Luna and P.ID_Luna in ($month1, $month2) and P.An = $year");
    break;
    case 3:	    
	    $year = $_REQUEST["y"];
	    $period = @$_REQUEST["p"] ? $_REQUEST["p"] : "(select Max(V.Perioada) from volum_import V where V.An=$year)";     
        $result = $conn->query("select V.Perioada, T.Perioada, P.Nume_Produs, P.Tip, V.Cantitate, V.An from ((volum_import V left join Produse P on V.ID_Produs=P.ID_Produs) left join Perioada T on T.ID_Perioada=V.Perioada) where V.An=$year and V.Perioada=$period order by V.ID_Produs DESC");
        break;
    case 4:
        $year = $_REQUEST["y"];
        $result = $conn->query("select L.Nume as Luna, P.Pret_Lei, P.Pret_Dolari, P.Platts, P.An from preturi_import P, Luna L where P.ID_Luna=L.ID_Luna and P.An=$year");
	    break;
    case 'all':
        $res1 = $conn->query("select P.ID_Luna, L.Nume as Luna, P.An from preturi_benzina P, Luna L where P.ID_Luna = L.ID_Luna and P.ID_Produs = (select ID_Produs from Produse where Nume_Produs='A95') order by P.An DESC, P.ID_Luna ASC");
        $res3 = $conn->query("select P.ID_Perioada, P.Perioada, V.An from volum_import V, perioada P where P.ID_Perioada = V.Perioada group by V.Perioada, V.An order by V.An DESC, V.Perioada DESC"); 
        $res4 = $conn->query("select P.ID_Luna, L.Nume as Luna, P.An from preturi_import P, luna L where P.ID_Luna = L.ID_Luna order by An DESC, ID_Luna ASC");
        if(!$res1 || !$res3 || !$res4) die($conn->error);
        echo json_encode([$res1->fetch_all(MYSQLI_ASSOC), $res3->fetch_all(MYSQLI_ASSOC), $res4->fetch_all(MYSQLI_ASSOC)]);
        goto f;
    default: 
        echo json_encode([]);
        goto f;

}

if(!$result) {
    http_response_code(500);
    die($conn->error);
}
echo json_encode($result->fetch_all(MYSQLI_ASSOC));
f:
$conn->close();