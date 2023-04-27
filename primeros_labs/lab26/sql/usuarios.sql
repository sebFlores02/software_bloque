-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 14, 2023 at 03:09 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `instagram_labs`
--

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `profile_pic` text DEFAULT NULL,
  `nombre` text NOT NULL,
  `escuela` text NOT NULL,
  `image` text DEFAULT NULL,
  `user` text NOT NULL,
  `descripcion` text NOT NULL,
  `likes` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `profile_pic`, `nombre`, `escuela`, `image`, `user`, `descripcion`, `likes`, `created_at`) VALUES
(1, 'https://digitalhub.fifa.com/transform/d8e69a8f-03ca-418e-9721-547e7c0178bc/PARIS-FRANCE-MAY-08-Lionel-Messi-of-Paris-Saint-Germain-warming-up-during-the-Ligue-1-Uber-Eats-match-between-Paris-Saint-Germain-and-ESTAC-Troyes-at-Parc-des-Princes-on-May-8-2022-in-Paris-France-Photo-by-Antonio-Borga-Eurasia-Sport-Images-Getty-Images', 'Lionel Messi', 'Football Club Barcelona', 'https://imgresizer.eurosport.com/unsafe/1280x960/smart/filters:format(jpeg)/origin-imgresizer.eurosport.com/2022/12/18/3510918-71565528-2560-1440.jpg', 'lionel_2022', 'Campeon del Mundo 2022 y Maximo ganador de balones D\'OR', 45000000, '2023-03-13 02:13:31'),
(2, 'https://digitalhub.fifa.com/transform/d8e69a8f-03ca-418e-9721-547e7c0178bc/PARIS-FRANCE-MAY-08-Lionel-Messi-of-Paris-Saint-Germain-warming-up-during-the-Ligue-1-Uber-Eats-match-between-Paris-Saint-Germain-and-ESTAC-Troyes-at-Parc-des-Princes-on-May-8-2022-in-Paris-France-Photo-by-Antonio-Borga-Eurasia-Sport-Images-Getty-Images', 'Lionel Messi', 'Futbol Club Barcelona', 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/11/29/163502.jpg', 'lionel_2022', 'Maximo ganador de balone d\'or', 52000000, '2023-03-13 02:19:26'),
(3, 'https://www.tennisitaliano.it/files/articoli/5/5/2/55245/B_federer-wimbledon2019-30762.jpg', 'Federer', 'Wimbledon', 'https://www.tennisitaliano.it/files/articoli/5/5/2/55245/B_federer-wimbledon2019-30762.jpg', 'rogerFederer20', 'Goat of tenis', 5000000, '2023-03-14 14:05:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
