-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2020 at 07:40 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `manajuser_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'Role 1'),
(2, 'Role 2'),
(3, 'Role 3');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` bigint(12) UNSIGNED ZEROFILL DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `roleId`) VALUES
(1, 'Umi Kalsum', 'umikalsum12@gmail.com', 'abcde.1', 008325723223, 1),
(2, 'Govinda', 'gege@gmail.com', 'abcde', 089227469556, 2),
(3, 'Rizqi Kartika', 'rkartika@gmail.com', 'abcde', 008563890342, 2),
(4, 'Huwaida', 'huwaida76@gmail.com', 'abcd', 000892242421, 2),
(5, 'Haruka', 'haruka@gmail.com', 'nbsd', 008278493356, 3),
(6, 'Annisa Nauli', 'annisa@gmail.com', 'adad', 085138230534, 3),
(7, 'Anggini', 'anggi77@gmail.com', 'adss', 008763249042, 2),
(8, 'Satrio Krisna', 'satsatrio@gmail.com', 'abcd', 008702494545, 1),
(26, 'Syanum Sanala', 'syanum', 'dsd', 000894284742, 1),
(28, 'Ananta M', 'anantamhd@gmail.com', 'abcds', 008589347134, 3),
(29, 'Syalala', 'lala@gmail.com', 'acd', 000821083493, 2),
(30, 'Kartika Safitri', 'kartika@gmail.com', 'adas', 008962382327, 1),
(31, 'Lala Lili', 'lalali@gmail.com', 'asba', 000872354546, 2),
(32, 'LalaLili', 'lalali@gmail.com', 'asba', 000872354546, 2),
(34, 'Maemunah maysaroh', 'maekk@gmail.com', 'abc', 008762323443, 1),
(36, 'Aryo gusman', 'aryog@gmail.com', 'adad', 000821932483, 1),
(37, 'Amanda Rawles', 'amndarw@gmail.com', 'asdd', 008932492435, 1),
(41, 'Shintia', 'shintia@gmail.com', 'abcd', 008967264234, 2),
(42, 'Siti aminah', 'sisiti@gmail.com', 'dbae', 008123456784, 2),
(43, 'Kurnia sari', 'kurnia90@gmail.com', 'abcdad', 000878972346, 2),
(44, 'Sari Ayu Wardani', 'sariayywa@gmail.com', 'dabahd', 000837249824, 1),
(45, 'Sabila D', 'ssabilad@gmail.com', 'abcd', 008957289432, 1),
(46, 'Ali M', 'alimm@gmail.com', 'aA1.', 895413830776, 2),
(47, 'Muhaimin', 'mhimin@gmail.com', 'Abi99.1', 8532392948421234, 1),
(48, 'Syaifudin', 'syaifudin@gmail.com', 'a1.AA.2', 857361001234, 1),
(49, 'Lulu', 'lulu@gmail.com', 'Anmd1.222', 085799140719, 2),
(50, 'lulu', 'lulu@gmail.com', 'LuLu.200', 085799140719, 1),
(51, 'Andini', 'andini@gmail.com', 'And13#aa', 008579914071, 3),
(52, 'Dono', 'dono@gmail.com', 'Dono.19', 085799140719, 2),
(53, 'Dini', 'dini@gmail.com', 'Haha*19m', 857991407199, 2),
(54, 'Joko', 'joko@gmail.com', 'Joko.1', 008579914071, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
