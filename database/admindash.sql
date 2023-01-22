-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 11 jan. 2023 à 21:38
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `admindash`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `user_fullname` varchar(255) DEFAULT NULL,
  `user_photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `titre`, `photo`, `description`, `status`, `id_user`, `user_fullname`, `user_photo`, `createdAt`, `updatedAt`) VALUES
(20, 'gomme', 'WhatsApp Image 2023-01-10 at 15.56.14.jpeg', 'blanche', 'published', 39, 'soukaina bentalia', '33333.jpg', '2023-01-10 15:31:44', '2023-01-10 15:32:51'),
(21, 'testUnitaire', 'images (3).png', 'testUnitaire testUnitaire testUnitaire testUnitaire', 'published', 33, 'youness kerouani', 'th.jpg', '2023-01-10 21:39:33', '2023-01-10 21:42:03'),
(22, 'inteligence Artificielle', 'téléchargement (3).jpg', 'L\'intelligence artificielle (IA) est un  ensemble de théories et de techniques mises en œuvre en vue de réaliser des machines capables de simuler l\'intelligence humaine ', 'accepted', 40, 'salma rabai', '44444.jpg', '2023-01-11 10:20:57', '2023-01-11 10:22:10'),
(23, 'les serveurs', 'téléchargement (1).jpg', 'En fonctionnement, un serveur répond automatiquement à des requêtes provenant d\'autres dispositifs informatiques (les clients), selon le principe dit client-serveur. Le format des requêtes et des résultats est normalisé, se conforme à des protocoles résea', 'pending', 35, 'ayoub benjdia', 'sds.jpg', '2023-01-11 10:22:59', '2023-01-11 10:22:59');

-- --------------------------------------------------------

--
-- Structure de la table `bulletins`
--

CREATE TABLE `bulletins` (
  `id` int(11) NOT NULL,
  `id_student` int(11) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `conversations`
--

CREATE TABLE `conversations` (
  `id` int(11) NOT NULL,
  `senderId` int(11) DEFAULT NULL,
  `receiverId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `conversations`
--

INSERT INTO `conversations` (`id`, `senderId`, `receiverId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, '2022-12-20 20:38:04', '2022-12-20 20:38:04'),
(21, 35, 1, '2022-12-26 19:25:08', '2022-12-26 19:25:08'),
(24, 1, 33, '2022-12-26 20:11:12', '2022-12-26 20:11:12'),
(25, 2, 33, '2022-12-27 00:00:06', '2022-12-27 00:00:06'),
(30, 2, 36, '2023-01-08 17:53:01', '2023-01-08 17:53:01'),
(31, 35, 39, '2023-01-10 14:45:53', '2023-01-10 14:45:53'),
(32, 38, 39, '2023-01-10 14:46:56', '2023-01-10 14:46:56'),
(33, 40, 1, '2023-01-10 15:03:25', '2023-01-10 15:03:25'),
(34, 33, 36, '2023-01-10 15:09:34', '2023-01-10 15:09:34'),
(35, 1, 38, '2023-01-10 15:17:20', '2023-01-10 15:17:20'),
(36, 35, 38, '2023-01-10 15:18:25', '2023-01-10 15:18:25'),
(37, 40, 39, '2023-01-10 15:58:38', '2023-01-10 15:58:38'),
(38, 41, 38, '2023-01-10 15:59:25', '2023-01-10 15:59:25'),
(39, 38, 33, '2023-01-11 10:46:29', '2023-01-11 10:46:29'),
(40, 35, 33, '2023-01-11 10:46:34', '2023-01-11 10:46:34'),
(41, 39, 33, '2023-01-11 10:46:41', '2023-01-11 10:46:41'),
(42, 40, 33, '2023-01-11 10:49:13', '2023-01-11 10:49:13');

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

CREATE TABLE `cours` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `id_prof` int(11) DEFAULT NULL,
  `prof_fullname` varchar(255) DEFAULT NULL,
  `prof_photo` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `cours`
--

INSERT INTO `cours` (`id`, `titre`, `id_prof`, `prof_fullname`, `prof_photo`, `file`, `createdAt`, `updatedAt`) VALUES
(3, 'Spring Security', 2, 'simo mido', 'user1.png', '222.png', '2022-12-27 15:40:26', '2022-12-27 15:40:26'),
(4, 'chatGPT', 2, 'simo mido', 'user1.png', 'chat2.png', '2023-01-10 15:08:45', '2023-01-10 15:08:45'),
(5, 'contact security', 2, 'simo mido', 'user1.png', 'contact-us.png', '2023-01-10 15:30:55', '2023-01-10 15:30:55');

-- --------------------------------------------------------

--
-- Structure de la table `emplois`
--

CREATE TABLE `emplois` (
  `id` int(11) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `emplois`
--

INSERT INTO `emplois` (`id`, `role`, `file`, `createdAt`, `updatedAt`) VALUES
(8, 'enseignant', 'DEVOIR3_YOUNESS_KEROUANI.pdf', '2023-01-08 15:31:51', '2023-01-08 15:31:51'),
(11, 'etudiant', 'exam_TP.docx', '2023-01-10 13:42:13', '2023-01-10 13:42:13');

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `titre`, `description`, `photo`, `createdAt`, `updatedAt`) VALUES
(2, 'summer event2', 'summer event32', '_CACHE-f29a2cf28891f9432b28148564e761a4_730x0.jpg', '2022-12-18 01:19:04', '2022-12-18 02:36:11'),
(5, 'Gestion Administatifs', ' processus administratifs l\'élaboration des stratégies', 'administratif-77@w_750.png', '2022-12-18 02:37:23', '2023-01-11 10:25:46');

-- --------------------------------------------------------

--
-- Structure de la table `forums`
--

CREATE TABLE `forums` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `forums`
--

INSERT INTO `forums` (`id`, `titre`, `description`, `photo`, `createdAt`, `updatedAt`) VALUES
(14, 'EDI ENSA', 'EDI', 'EDI-large-EDiCS-768x384.png', '2022-12-17 23:00:17', '2022-12-17 23:04:09'),
(17, 'Genie Logiciel', 'Genie Logiciel', '1880129.png', '2022-12-18 13:41:43', '2022-12-18 13:41:43');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `conversationId` int(11) DEFAULT NULL,
  `sender` int(11) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `conversationId`, `sender`, `text`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'cdcd', '2023-01-08 17:53:56', '2023-01-08 17:53:56'),
(2, 30, 36, 'hello', '2023-01-08 17:54:28', '2023-01-08 17:54:28'),
(3, 1, 1, 'hello\n', '2023-01-10 13:37:39', '2023-01-10 13:37:39'),
(4, 24, 1, 'hello', '2023-01-10 13:44:22', '2023-01-10 13:44:22'),
(5, 24, 33, 'hey', '2023-01-10 13:44:36', '2023-01-10 13:44:36'),
(6, 24, 1, 'salam', '2023-01-10 13:45:30', '2023-01-10 13:45:30'),
(7, 24, 33, 'hey', '2023-01-10 13:45:36', '2023-01-10 13:45:36'),
(8, 24, 33, 'saalam', '2023-01-10 13:45:43', '2023-01-10 13:45:43'),
(9, 22, 33, 'HI \n', '2023-01-10 14:32:58', '2023-01-10 14:32:58'),
(10, 24, 33, 'HI', '2023-01-10 14:34:14', '2023-01-10 14:34:14'),
(11, 24, 1, 'salam bro', '2023-01-10 14:34:18', '2023-01-10 14:34:18'),
(12, 24, 1, 'hey', '2023-01-10 14:34:27', '2023-01-10 14:34:27'),
(13, 24, 1, 'cc', '2023-01-10 14:35:33', '2023-01-10 14:35:33'),
(14, 31, 39, 'cc', '2023-01-10 14:46:09', '2023-01-10 14:46:09'),
(15, 31, 35, 'hi', '2023-01-10 14:46:21', '2023-01-10 14:46:21'),
(16, 31, 39, 'hhhh\n', '2023-01-10 14:46:27', '2023-01-10 14:46:27'),
(17, 31, 39, '', '2023-01-10 14:46:27', '2023-01-10 14:46:27'),
(18, 31, 39, 'ggg', '2023-01-10 14:46:36', '2023-01-10 14:46:36'),
(19, 31, 35, 'ggg', '2023-01-10 14:46:43', '2023-01-10 14:46:43'),
(20, 32, 39, 'cc\n', '2023-01-10 14:47:05', '2023-01-10 14:47:05'),
(21, 32, 39, '', '2023-01-10 14:47:09', '2023-01-10 14:47:09'),
(22, 21, 35, 'salam', '2023-01-10 14:47:10', '2023-01-10 14:47:10'),
(23, 21, 35, '', '2023-01-10 14:47:10', '2023-01-10 14:47:10'),
(24, 21, 35, 'slm', '2023-01-10 14:56:13', '2023-01-10 14:56:13'),
(25, 21, 1, 'hey', '2023-01-10 14:56:22', '2023-01-10 14:56:22'),
(26, 21, 35, 'hry', '2023-01-10 14:57:16', '2023-01-10 14:57:16'),
(27, 21, 1, 'salam', '2023-01-10 14:57:23', '2023-01-10 14:57:23'),
(28, 33, 40, 'coucou', '2023-01-10 15:03:51', '2023-01-10 15:03:51'),
(29, 33, 1, 'hello', '2023-01-10 15:03:54', '2023-01-10 15:03:54'),
(30, 33, 1, 'fen hania', '2023-01-10 15:04:00', '2023-01-10 15:04:00'),
(31, 34, 36, 'hello', '2023-01-10 15:09:41', '2023-01-10 15:09:41'),
(32, 35, 38, 'hello\n', '2023-01-10 15:17:34', '2023-01-10 15:17:34'),
(33, 35, 38, 'wwww', '2023-01-10 15:17:50', '2023-01-10 15:17:50'),
(34, 35, 1, 'hey', '2023-01-10 15:17:54', '2023-01-10 15:17:54'),
(35, 35, 38, 'lah yrhsm lwaliidin\n', '2023-01-10 15:18:09', '2023-01-10 15:18:09'),
(36, 35, 1, 'hania abro', '2023-01-10 15:18:14', '2023-01-10 15:18:14'),
(37, 36, 38, 'khoya benjo ', '2023-01-10 15:18:38', '2023-01-10 15:18:38'),
(38, 36, 35, 'a', '2023-01-10 15:19:45', '2023-01-10 15:19:45'),
(39, 36, 35, 'a', '2023-01-10 15:19:45', '2023-01-10 15:19:45'),
(40, 36, 38, 'khoya \n', '2023-01-10 15:19:57', '2023-01-10 15:19:57'),
(41, 36, 38, 'rak aziz\n', '2023-01-10 15:20:06', '2023-01-10 15:20:06'),
(42, 32, 38, 'Bonjour ', '2023-01-10 15:57:40', '2023-01-10 15:57:40'),
(43, 37, 39, 'cc', '2023-01-10 15:58:47', '2023-01-10 15:58:47'),
(44, 35, 38, 'salam 3likom \n', '2023-01-10 15:59:53', '2023-01-10 15:59:53'),
(45, 35, 38, '', '2023-01-10 15:59:53', '2023-01-10 15:59:53'),
(46, 35, 1, 'hello', '2023-01-10 16:00:32', '2023-01-10 16:00:32'),
(47, 32, 39, 'hey', '2023-01-10 16:01:02', '2023-01-10 16:01:02');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2022-12-03 18:23:11', '2022-12-03 18:23:11'),
(2, 'user', '2022-12-03 18:23:11', '2022-12-03 18:23:11'),
(3, 'directeur', '2022-12-03 18:23:11', '2022-12-03 18:23:11'),
(4, 'secretaire', '2022-12-03 18:23:11', '2022-12-03 18:23:11'),
(5, 'surveillant', '2022-12-03 18:23:11', '2022-12-03 18:23:11'),
(6, 'infirmier', '2022-12-03 18:23:11', '2022-12-03 18:23:11'),
(7, 'enseignant', '2022-12-03 18:23:11', '2022-12-03 18:23:11'),
(8, 'etudiant', '2022-12-03 18:23:11', '2022-12-03 18:23:11'),
(9, 'parent', '2022-12-03 18:23:11', '2022-12-03 18:23:11');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `fullname`, `adresse`, `phone`, `email`, `password`, `photo`, `createdAt`, `updatedAt`) VALUES
(1, 'ahmed', 'ahmed number1', 'maroc', '06224434', 'ahmed@gg.com', '$2a$08$hyawH9kYcQm8HT46iDLOY.Sq.a0vsKqZ36aDFflaMGvfKCax0bwCa', 'admin.jpg', '2022-12-03 18:25:16', '2022-12-05 19:22:17'),
(2, 'simo11', 'simo mido', 'ewer', '423423423', 'dsdfgdg@gmail.com', '$2a$08$KHjMwqq2sahmvMk4juF8MuNed5XVw785BCgquHdmbNThYWVOPaZL2', 'user1.png', '2022-12-17 23:33:16', '2022-12-18 00:33:16'),
(4, 'akram', 'akram akram', 'maroc', '06224434', 'akram@gg.com', '$2a$08$gEN0AKANL1CMgl6JqeHL5OKrkHtYqB1Ta8bKCScHpPxVzZQZ7byd2', 'user.png', '2022-12-21 03:00:08', '2022-12-21 03:00:08'),
(33, 'yuness', 'youness kerouani', 'bloc 3 hay riad', '0634342342', 'youness.kerouani@gmail.com', '$2a$08$9phqoFnkz94.Vu/wj/S1yeXr39jP4XHTF6p0rxTjVIkY3L8H9gtUm', 'th.jpg', '2022-12-24 17:47:36', '2023-01-10 15:06:53'),
(35, 'ayoub', 'ayoub benjdia', 'rue 56', '076728282', 'ayoub.benjdia@gg.com', '$2a$08$p312aA7jjUNqYYtplVibNu3glwh71gUHN3fUU82eBOE3hAH19MF3m', 'sds.jpg', '2022-12-24 21:18:34', '2022-12-24 21:18:34'),
(36, 'benjeloun', 'ahmed benjeloun', '4 rue riad', '0789101121', 'ahmed.benjeloun@gmail.com', '$2a$08$iCg7gF3iy.fhSMYXZYEwkeuaMjoEDLA1Kyj035vIw2xWjNHQ90jqW', 'boss.jpeg', '2022-12-27 00:09:49', '2022-12-27 00:09:49'),
(38, 'mohammed', 'mohammed nejdi', 'bloc 14 hay amal', '062141230', 'mohammed.nejdi@gmail.com', '$2a$08$M4teWAJA3r5zcqeQMbUxT.2YWwR5LbKvWuCigFG6q6qdCyFEXzmfW', '11122.jpg', '2023-01-10 14:41:16', '2023-01-10 14:41:16'),
(39, 'soukainaa', 'soukaina bentalia', 'bloc 23 hay riad', '062342423', 'soukaina.bentalia@gmail.com', '$2a$08$6Ahb1ASrEgRer0jX7LTkZuFIUTInAmKfFsGsGIIJxTV5So5Vvj0AW', '33333.jpg', '2023-01-10 14:45:23', '2023-01-10 15:27:08'),
(40, 'salma', 'salma rabai', 'bloc C hay riad', '0623432423', 'salma.rabai@gmail.com', '$2a$08$YV8PPOk4eIlM/O49rW4thuUnOcvIrvbqiAlw2ZckkegKtXSk5HDtS', '44444.jpg', '2023-01-10 15:02:21', '2023-01-10 15:02:21'),
(41, 'mohcine', 'mohcine zbida', 'bloc 31 hay mebchour', '06423423423', 'mohcine.zbida@gmail.com', '$2a$08$f4WykbwDdrsVx66MoEM6JO4SczGvRrwnzXDHTt00.C9k7aZJrMyKS', '1.jpg', '2023-01-10 15:29:29', '2023-01-11 10:35:05');

-- --------------------------------------------------------

--
-- Structure de la table `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2022-12-03 18:25:17', '2022-12-03 18:25:17', 1, 1),
('2022-12-21 03:00:08', '2022-12-21 03:00:08', 1, 4),
('2022-12-27 00:09:49', '2022-12-27 00:09:49', 3, 36),
('2022-12-17 23:33:16', '2022-12-17 23:33:16', 7, 2),
('2022-12-24 17:47:36', '2022-12-24 17:47:36', 8, 33),
('2022-12-24 21:18:35', '2022-12-24 21:18:35', 8, 35),
('2023-01-10 14:41:16', '2023-01-10 14:41:16', 8, 38),
('2023-01-10 14:45:23', '2023-01-10 14:45:23', 8, 39),
('2023-01-10 15:02:21', '2023-01-10 15:02:21', 8, 40),
('2023-01-10 15:29:29', '2023-01-10 15:29:29', 8, 41);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `bulletins`
--
ALTER TABLE `bulletins`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `conversations`
--
ALTER TABLE `conversations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cours`
--
ALTER TABLE `cours`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `emplois`
--
ALTER TABLE `emplois`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `forums`
--
ALTER TABLE `forums`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `bulletins`
--
ALTER TABLE `bulletins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `conversations`
--
ALTER TABLE `conversations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT pour la table `cours`
--
ALTER TABLE `cours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `emplois`
--
ALTER TABLE `emplois`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `forums`
--
ALTER TABLE `forums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
