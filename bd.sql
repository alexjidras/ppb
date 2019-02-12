-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 24, 2018 at 06:06 AM
-- Server version: 5.7.20-log
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ppb`
--

-- --------------------------------------------------------

--
-- Table structure for table `benzinarii`
--

CREATE TABLE `benzinarii` (
  `ID` int(11) NOT NULL,
  `Nume_Firma` varchar(15) NOT NULL,
  `An_Fondare` year(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `benzinarii`
--

INSERT INTO `benzinarii` (`ID`, `Nume_Firma`, `An_Fondare`) VALUES
(1, 'Petrom', 1998),
(2, 'Vento', NULL),
(3, 'Tirex-Petrol', 1995),
(4, 'Rompetrol', NULL),
(5, 'Lukoil', 1995),
(6, 'Bemol', 2006),
(7, 'Restul', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `factori_pret`
--

CREATE TABLE `factori_pret` (
  `Id_Factor` int(11) NOT NULL,
  `Nume_Factor` varchar(30) NOT NULL,
  `Tip_Valoare` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `factori_pret`
--

INSERT INTO `factori_pret` (`Id_Factor`, `Nume_Factor`, `Tip_Valoare`) VALUES
(1, 'Pret Platts', 'lei/l'),
(2, 'TVA', '%'),
(3, 'Acciz vamal', 'lei/l'),
(4, 'Marja comerciala', 'lei');

-- --------------------------------------------------------

--
-- Table structure for table `luna`
--

CREATE TABLE `luna` (
  `ID_Luna` int(11) NOT NULL,
  `Nume` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `luna`
--

INSERT INTO `luna` (`ID_Luna`, `Nume`) VALUES
(1, 'ianuarie'),
(2, 'februarie'),
(3, 'martie'),
(4, 'aprilie'),
(5, 'mai'),
(6, 'iunie'),
(7, 'iulie'),
(8, 'august'),
(9, 'septembrie'),
(10, 'octombrie'),
(11, 'noiembrie'),
(12, 'decembrie');

-- --------------------------------------------------------

--
-- Table structure for table `nr_benzinarii`
--

CREATE TABLE `nr_benzinarii` (
  `ID_Benzinarie` int(11) NOT NULL,
  `Nr_statii` int(11) NOT NULL,
  `An` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nr_benzinarii`
--

INSERT INTO `nr_benzinarii` (`ID_Benzinarie`, `Nr_statii`, `An`) VALUES
(1, 81, 2018),
(2, 71, 2018),
(3, 86, 2018),
(4, 85, 2018),
(5, 104, 2018),
(6, 38, 2018),
(7, 212, 2018);

-- --------------------------------------------------------

--
-- Table structure for table `perioada`
--

CREATE TABLE `perioada` (
  `ID_Perioada` int(11) NOT NULL,
  `Perioada` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `perioada`
--

INSERT INTO `perioada` (`ID_Perioada`, `Perioada`) VALUES
(1, 'ianuarie-martie'),
(2, 'ianuarie-iunie'),
(3, 'ianuarie-septembrie'),
(4, 'ianuarie-decembrie');

-- --------------------------------------------------------

--
-- Table structure for table `preturi_benzina`
--

CREATE TABLE `preturi_benzina` (
  `ID_Luna` int(11) NOT NULL,
  `ID_Produs` int(11) NOT NULL,
  `Pret_Produs` float DEFAULT NULL,
  `Pret_Plafon` float DEFAULT NULL,
  `Pret_Prognoza` float DEFAULT NULL,
  `An` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `preturi_benzina`
--

INSERT INTO `preturi_benzina` (`ID_Luna`, `ID_Produs`, `Pret_Produs`, `Pret_Plafon`, `Pret_Prognoza`, `An`) VALUES
(1, 2, 8.97, NULL, NULL, 2009),
(2, 2, 8.97, NULL, NULL, 2009),
(3, 2, 8.78, NULL, NULL, 2009),
(4, 2, 9.57, NULL, NULL, 2009),
(5, 2, 9.57, NULL, NULL, 2009),
(6, 2, 10.63, NULL, NULL, 2009),
(7, 2, 11.88, NULL, NULL, 2009),
(8, 2, 11.88, NULL, NULL, 2009),
(9, 2, 11.88, NULL, NULL, 2009),
(10, 2, 11.88, NULL, NULL, 2009),
(11, 2, 11.88, NULL, NULL, 2009),
(12, 2, 11.88, NULL, NULL, 2009),
(1, 2, 12.68, NULL, NULL, 2010),
(2, 2, 13.65, NULL, NULL, 2010),
(3, 2, 13.9, NULL, NULL, 2010),
(4, 2, 14.4, NULL, NULL, 2010),
(5, 2, 13.97, NULL, NULL, 2010),
(6, 2, 14.15, NULL, NULL, 2010),
(7, 2, 14.15, NULL, NULL, 2010),
(8, 2, 14.15, NULL, NULL, 2010),
(9, 2, 14.15, NULL, NULL, 2010),
(10, 2, 14.15, NULL, NULL, 2010),
(11, 2, 15.15, NULL, NULL, 2010),
(12, 2, 14.95, NULL, NULL, 2010),
(1, 2, 15.35, NULL, NULL, 2011),
(2, 2, 15.35, NULL, NULL, 2011),
(3, 2, 15.78, NULL, NULL, 2011),
(4, 2, 16.16, NULL, NULL, 2011),
(5, 2, 16.45, NULL, NULL, 2011),
(6, 2, 16.45, NULL, NULL, 2011),
(7, 2, 16.45, NULL, NULL, 2011),
(8, 2, 16.6, NULL, NULL, 2011),
(9, 2, 16.6, NULL, NULL, 2011),
(10, 2, 16.6, NULL, NULL, 2011),
(11, 2, 16.6, NULL, NULL, 2011),
(12, 2, 16.6, NULL, NULL, 2011),
(1, 2, 16.6, NULL, NULL, 2012),
(2, 2, 16.6, NULL, NULL, 2012),
(3, 2, 17.6, NULL, NULL, 2012),
(4, 2, 17.22, NULL, NULL, 2012),
(5, 2, 17, NULL, NULL, 2012),
(6, 2, 16.75, NULL, NULL, 2012),
(7, 2, 16.64, NULL, NULL, 2012),
(8, 2, 17.6, NULL, NULL, 2012),
(9, 2, 17.6, NULL, NULL, 2012),
(10, 2, 17.6, NULL, NULL, 2012),
(11, 2, 17.24, NULL, NULL, 2012),
(12, 2, 17.08, NULL, NULL, 2012),
(1, 2, 17.1, NULL, NULL, 2013),
(2, 2, 17.57, NULL, NULL, 2013),
(3, 2, 17.61, NULL, NULL, 2013),
(4, 2, 17.6, NULL, NULL, 2013),
(5, 2, 17.6, NULL, NULL, 2013),
(6, 2, 17.57, NULL, NULL, 2013),
(7, 2, 17.6, NULL, NULL, 2013),
(8, 2, 17.6, NULL, NULL, 2013),
(9, 2, 17.57, NULL, NULL, 2013),
(10, 2, 17.57, NULL, NULL, 2013),
(11, 2, 17.45, NULL, NULL, 2013),
(12, 2, 17.45, NULL, NULL, 2013),
(1, 2, 17.8, NULL, NULL, 2014),
(2, 2, 17.74, NULL, NULL, 2014),
(3, 2, 18.44, NULL, NULL, 2014),
(4, 2, 18.35, NULL, NULL, 2014),
(5, 2, 18.35, NULL, NULL, 2014),
(6, 2, 18.44, NULL, NULL, 2014),
(7, 2, 18.37, NULL, NULL, 2014),
(8, 2, 18.41, NULL, NULL, 2014),
(9, 2, 18.52, NULL, NULL, 2014),
(10, 2, 18.15, NULL, NULL, 2014),
(11, 2, 17.95, NULL, NULL, 2014),
(12, 2, 17.44, NULL, NULL, 2014),
(1, 2, 16.63, NULL, NULL, 2015),
(2, 2, 17.37, NULL, NULL, 2015),
(3, 2, 17.28, NULL, NULL, 2015),
(4, 2, 17.25, NULL, NULL, 2015),
(5, 2, 17.24, NULL, NULL, 2015),
(6, 2, 17.77, NULL, NULL, 2015),
(7, 2, 17.98, NULL, NULL, 2015),
(8, 2, 18.01, NULL, NULL, 2015),
(9, 2, 18.08, NULL, NULL, 2015),
(10, 2, 17.92, NULL, NULL, 2015),
(11, 2, 17.67, NULL, NULL, 2015),
(12, 2, 17.14, NULL, NULL, 2015),
(1, 2, 16.48, NULL, NULL, 2016),
(2, 2, 15.81, NULL, NULL, 2016),
(3, 2, 15.68, NULL, NULL, 2016),
(4, 2, 15.68, NULL, NULL, 2016),
(5, 2, 16.35, NULL, NULL, 2016),
(6, 2, 16.19, NULL, NULL, 2016),
(7, 2, 15.675, NULL, NULL, 2016),
(8, 2, 15.6, NULL, NULL, 2016),
(9, 2, 16.22, NULL, NULL, 2016),
(10, 2, 16.2, NULL, NULL, 2016),
(11, 2, 16.26, NULL, NULL, 2016),
(12, 2, 16.64, NULL, NULL, 2016),
(1, 2, 17.39, 17.81, NULL, 2017),
(2, 2, 17.71, 18.16, NULL, 2017),
(3, 2, 17.32, 17.76, NULL, 2017),
(4, 2, 17.31, 17.75, NULL, 2017),
(5, 2, 16.94, 17.36, NULL, 2017),
(6, 2, 16.34, 16.76, NULL, 2017),
(7, 2, 15.86, 16.25, NULL, 2017),
(8, 2, 16.48, 16.89, NULL, 2017),
(9, 2, 16.93, 17.37, NULL, 2017),
(10, 2, 16.66, 17.13, NULL, 2017),
(11, 2, 17.04, 17.47, NULL, 2017),
(12, 2, 17.04, 17.53, NULL, 2017),
(1, 2, 17.57, 18.09, NULL, 2018),
(2, 2, 17.74, 18.32, NULL, 2018),
(3, 2, 17.23, 17.8, NULL, 2018),
(4, 2, 17.89, 18.41, NULL, 2018),
(5, 2, 18.46, 19.02, NULL, 2018),
(6, 2, 18.5, 19.14, NULL, 2018),
(7, 2, 18.61, 19.08, NULL, 2018),
(8, 2, 18.53, 19.01, NULL, 2018),
(9, 2, 18.68, 19.01, NULL, 2018),
(10, 2, 18.87, 18.99, NULL, 2018),
(11, 2, 18.88, 19.01, NULL, 2018),
(12, 2, 18.89, 19.01, NULL, 2018),
(1, 2, NULL, NULL, 19.3115, 2019),
(2, 2, NULL, NULL, 19.171, 2019),
(3, 2, NULL, NULL, 18.5201, 2019),
(4, 2, NULL, NULL, 17.6864, 2019),
(5, 2, NULL, NULL, 17.4652, 2019),
(6, 2, NULL, NULL, 18.2172, 2019),
(7, 2, NULL, NULL, 17.8962, 2019),
(8, 2, NULL, NULL, 18.4746, 2019),
(9, 2, NULL, NULL, 18.5003, 2019),
(10, 2, NULL, NULL, 18.2013, 2019),
(11, 2, NULL, NULL, 18.5455, 2019),
(12, 2, NULL, NULL, 18.9936, 2019),
(1, 2, NULL, NULL, 19.2045, 2020),
(2, 2, NULL, NULL, 18.8545, 2020),
(3, 2, NULL, NULL, 18.3296, 2020),
(4, 2, NULL, NULL, 18.9398, 2020),
(5, 2, NULL, NULL, 19.0501, 2020),
(6, 2, NULL, NULL, 19.8162, 2020),
(7, 2, NULL, NULL, 19.5165, 2020),
(8, 2, NULL, NULL, 19.1523, 2020),
(9, 2, NULL, NULL, 19.4676, 2020),
(10, 2, NULL, NULL, 18.9517, 2020),
(11, 2, NULL, NULL, 19.2491, 2020),
(12, 2, NULL, NULL, 18.7337, 2020);

-- --------------------------------------------------------

--
-- Table structure for table `preturi_import`
--

CREATE TABLE `preturi_import` (
  `ID_Luna` int(11) NOT NULL,
  `Pret_Lei` float NOT NULL,
  `Pret_Dolari` float NOT NULL,
  `Platts` float NOT NULL,
  `An` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `preturi_import`
--

INSERT INTO `preturi_import` (`ID_Luna`, `Pret_Lei`, `Pret_Dolari`, `Platts`, `An`) VALUES
(1, 11366, 669.8, 644.5, 2018),
(2, 11110, 666.6, 614.7, 2018),
(3, 10883, 656, 632.2, 2018),
(4, 11595, 705.5, 680.5, 2018),
(5, 12626, 757.9, 730, 2018),
(6, 12734, 756, 709.6, 2018),
(7, 12526, 750.1, 712.5, 2018),
(8, 12411, 747.4, 706.6, 2018),
(9, 12608, 752, 717.7, 2018),
(1, 11887, 590.3, 554.4, 2017),
(2, 11991, 599.9, 561.4, 2017),
(3, 11172, 566.3, 517.7, 2017),
(4, 11418, 590.1, 555.2, 2017),
(5, 10547, 565.2, 520.6, 2017),
(6, 9848, 540, 486.5, 2017),
(7, 9822, 541.4, 509.9, 2017),
(8, 10393, 580, 548.5, 2017),
(9, 10890, 615.3, 575, 2017),
(10, 10432, 598.4, 560.5, 2017),
(11, 11033, 631.2, 600.4, 2017),
(12, 10927, 635.6, 599.4, 2017);

-- --------------------------------------------------------

--
-- Table structure for table `produse`
--

CREATE TABLE `produse` (
  `ID_Produs` int(11) NOT NULL,
  `Nume_Produs` varchar(15) NOT NULL,
  `Tip` varchar(15) NOT NULL,
  `Cifra_octanica` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `produse`
--

INSERT INTO `produse` (`ID_Produs`, `Nume_Produs`, `Tip`, `Cifra_octanica`) VALUES
(1, 'A92', 'Standard', 92),
(2, 'A95', 'Premium', 95),
(3, 'A98', 'Super', 99);

-- --------------------------------------------------------

--
-- Table structure for table `valoare_factori`
--

CREATE TABLE `valoare_factori` (
  `ID_Luna` int(11) NOT NULL,
  `Id_Factor` int(11) NOT NULL,
  `Valoare` float NOT NULL,
  `An` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `valoare_factori`
--

INSERT INTO `valoare_factori` (`ID_Luna`, `Id_Factor`, `Valoare`, `An`) VALUES
(1, 1, 8.09, 2018),
(2, 1, 7.72, 2018),
(3, 1, 7.94, 2018),
(4, 1, 8.54, 2018),
(5, 1, 9.17, 2018),
(6, 1, 8.91, 2018),
(7, 1, 8.95, 2018),
(8, 1, 8.87, 2018),
(9, 1, 9.01, 2018),
(1, 1, 6.96, 2017),
(2, 1, 7.05, 2017),
(3, 1, 6.5, 2017),
(4, 1, 6.97, 2017),
(5, 1, 6.54, 2017),
(6, 1, 6.11, 2017),
(7, 1, 6.4, 2017),
(8, 1, 6.89, 2017),
(9, 1, 7.22, 2017),
(10, 1, 7.04, 2017),
(11, 1, 7.54, 2017),
(12, 1, 7.53, 2017),
(1, 2, 20, 2018),
(2, 2, 20, 2018),
(3, 2, 20, 2018),
(4, 2, 20, 2018),
(5, 2, 20, 2018),
(6, 2, 20, 2018),
(7, 2, 20, 2018),
(8, 2, 20, 2018),
(9, 2, 20, 2018),
(1, 2, 20, 2017),
(2, 2, 20, 2017),
(3, 2, 20, 2017),
(4, 2, 20, 2017),
(5, 2, 20, 2017),
(6, 2, 20, 2017),
(7, 2, 20, 2017),
(8, 2, 20, 2017),
(9, 2, 20, 2017),
(10, 2, 20, 2017),
(11, 2, 20, 2017),
(12, 2, 20, 2017),
(1, 3, 3.76, 2018),
(2, 3, 3.76, 2018),
(3, 3, 3.76, 2018),
(4, 3, 3.76, 2018),
(5, 3, 3.76, 2018),
(6, 3, 3.76, 2018),
(7, 3, 3.76, 2018),
(8, 3, 3.76, 2018),
(9, 3, 3.76, 2018),
(1, 3, 3.45, 2017),
(2, 3, 3.45, 2017),
(3, 3, 3.45, 2017),
(4, 3, 3.45, 2017),
(5, 3, 3.45, 2017),
(6, 3, 3.45, 2017),
(7, 3, 3.45, 2017),
(8, 3, 3.45, 2017),
(9, 3, 3.45, 2017),
(10, 3, 3.45, 2017),
(11, 3, 3.45, 2017),
(12, 3, 3.45, 2017),
(1, 4, 4.62, 2018),
(2, 4, 5.3, 2018),
(3, 4, 4.51, 2018),
(4, 4, 4.4, 2018),
(5, 4, 4.26, 2018),
(6, 4, 4.69, 2018),
(7, 4, 4.58, 2018),
(8, 4, 4.61, 2018),
(9, 4, 4.44, 2018),
(1, 4, 6.01, 2017),
(2, 4, 6.25, 2017),
(3, 4, 6.51, 2017),
(4, 4, 5.94, 2017),
(5, 4, 6.06, 2017),
(6, 4, 5.98, 2017),
(7, 4, 5.12, 2017),
(8, 4, 5.17, 2017),
(9, 4, 5.26, 2017),
(10, 4, 5.23, 2017),
(11, 4, 4.97, 2017),
(12, 4, 5.04, 2017);

-- --------------------------------------------------------

--
-- Table structure for table `volum_import`
--

CREATE TABLE `volum_import` (
  `ID_Produs` int(11) NOT NULL,
  `Cantitate` float NOT NULL,
  `Perioada` int(11) NOT NULL,
  `An` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `volum_import`
--

INSERT INTO `volum_import` (`ID_Produs`, `Cantitate`, `Perioada`, `An`) VALUES
(3, 2019.56, 3, 2018),
(2, 120812, 3, 2018),
(1, 2727.75, 3, 2018),
(3, 1322.96, 2, 2018),
(2, 77531.9, 2, 2018),
(1, 1246.8, 2, 2018),
(3, 479.35, 1, 2017),
(2, 33884.1, 1, 2017),
(1, 1016.23, 1, 2017),
(3, 2427.24, 3, 2017),
(2, 117876, 3, 2017),
(1, 3719.88, 3, 2017),
(2, 158617, 4, 2017),
(3, 4046.35, 4, 2017),
(1, 5664.9, 4, 2017);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `benzinarii`
--
ALTER TABLE `benzinarii`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `factori_pret`
--
ALTER TABLE `factori_pret`
  ADD PRIMARY KEY (`Id_Factor`);

--
-- Indexes for table `luna`
--
ALTER TABLE `luna`
  ADD PRIMARY KEY (`ID_Luna`);

--
-- Indexes for table `nr_benzinarii`
--
ALTER TABLE `nr_benzinarii`
  ADD KEY `ID_Benzinarie` (`ID_Benzinarie`);

--
-- Indexes for table `perioada`
--
ALTER TABLE `perioada`
  ADD PRIMARY KEY (`ID_Perioada`);

--
-- Indexes for table `preturi_benzina`
--
ALTER TABLE `preturi_benzina`
  ADD KEY `ID_Luna` (`ID_Luna`),
  ADD KEY `ID_Produs` (`ID_Produs`);

--
-- Indexes for table `preturi_import`
--
ALTER TABLE `preturi_import`
  ADD KEY `ID_Luna` (`ID_Luna`);

--
-- Indexes for table `produse`
--
ALTER TABLE `produse`
  ADD PRIMARY KEY (`ID_Produs`);

--
-- Indexes for table `valoare_factori`
--
ALTER TABLE `valoare_factori`
  ADD KEY `ID_Luna` (`ID_Luna`),
  ADD KEY `Id_Factor` (`Id_Factor`);

--
-- Indexes for table `volum_import`
--
ALTER TABLE `volum_import`
  ADD KEY `ID_Produs` (`ID_Produs`),
  ADD KEY `Perioada` (`Perioada`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `benzinarii`
--
ALTER TABLE `benzinarii`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `factori_pret`
--
ALTER TABLE `factori_pret`
  MODIFY `Id_Factor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `nr_benzinarii`
--
ALTER TABLE `nr_benzinarii`
  ADD CONSTRAINT `nr_benzinarii_ibfk_1` FOREIGN KEY (`ID_Benzinarie`) REFERENCES `benzinarii` (`ID`);

--
-- Constraints for table `preturi_benzina`
--
ALTER TABLE `preturi_benzina`
  ADD CONSTRAINT `preturi_benzina_ibfk_1` FOREIGN KEY (`ID_Luna`) REFERENCES `luna` (`ID_Luna`),
  ADD CONSTRAINT `preturi_benzina_ibfk_2` FOREIGN KEY (`ID_Produs`) REFERENCES `produse` (`ID_Produs`);

--
-- Constraints for table `preturi_import`
--
ALTER TABLE `preturi_import`
  ADD CONSTRAINT `preturi_import_ibfk_1` FOREIGN KEY (`ID_Luna`) REFERENCES `luna` (`ID_Luna`);

--
-- Constraints for table `valoare_factori`
--
ALTER TABLE `valoare_factori`
  ADD CONSTRAINT `valoare_factori_ibfk_1` FOREIGN KEY (`ID_Luna`) REFERENCES `luna` (`ID_Luna`),
  ADD CONSTRAINT `valoare_factori_ibfk_2` FOREIGN KEY (`Id_Factor`) REFERENCES `factori_pret` (`Id_Factor`);

--
-- Constraints for table `volum_import`
--
ALTER TABLE `volum_import`
  ADD CONSTRAINT `volum_import_ibfk_1` FOREIGN KEY (`ID_Produs`) REFERENCES `produse` (`ID_Produs`),
  ADD CONSTRAINT `volum_import_ibfk_2` FOREIGN KEY (`Perioada`) REFERENCES `perioada` (`ID_Perioada`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
