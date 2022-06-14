-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 13 juin 2022 à 13:38
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bank-manager`
--

-- --------------------------------------------------------

--
-- Structure de la table `beneficiaires`
--

CREATE TABLE `beneficiaires` (
  `ID` int(10) NOT NULL,
  `nom` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `ID` int(10) NOT NULL,
  `nom` varchar(25) DEFAULT NULL,
  `Type` enum('depense','revenu') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `crediteurs`
--

CREATE TABLE `crediteurs` (
  `ID` int(10) NOT NULL,
  `nom` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `cryptos`
--

CREATE TABLE `cryptos` (
  `ID` int(10) NOT NULL,
  `nomCrypto` varchar(25) DEFAULT NULL,
  `acronymeCrypto` varchar(5) DEFAULT NULL,
  `montantEUR` double(10,2) DEFAULT NULL,
  `montantCrypto` double(20,8) DEFAULT NULL,
  `tauxEUR` double(20,8) DEFAULT NULL,
  `type` enum('depense','revenu','stake') DEFAULT NULL,
  `sousType` varchar(25) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `depenses`
--

CREATE TABLE `depenses` (
  `ID` int(25) NOT NULL,
  `montant` double(10,2) DEFAULT NULL,
  `Date` datetime DEFAULT NULL,
  `IDBeneficiaire` int(10) DEFAULT NULL,
  `IDCategorie` int(10) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Obligatoire` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `revenus`
--

CREATE TABLE `revenus` (
  `ID` int(25) NOT NULL,
  `montant` double(10,2) DEFAULT NULL,
  `Date` datetime DEFAULT NULL,
  `IDCrediteur` int(10) DEFAULT NULL,
  `IDCategorie` int(10) DEFAULT NULL,
  `Description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `beneficiaires`
--
ALTER TABLE `beneficiaires`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `crediteurs`
--
ALTER TABLE `crediteurs`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `cryptos`
--
ALTER TABLE `cryptos`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `depenses`
--
ALTER TABLE `depenses`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDBeneficiaire` (`IDBeneficiaire`),
  ADD KEY `IDCategorie` (`IDCategorie`);

--
-- Index pour la table `revenus`
--
ALTER TABLE `revenus`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `beneficiaires`
--
ALTER TABLE `beneficiaires`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `crediteurs`
--
ALTER TABLE `crediteurs`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `cryptos`
--
ALTER TABLE `cryptos`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `depenses`
--
ALTER TABLE `depenses`
  MODIFY `ID` int(25) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `revenus`
--
ALTER TABLE `revenus`
  MODIFY `ID` int(25) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `depenses`
--
ALTER TABLE `depenses`
  ADD CONSTRAINT `depenses_ibfk_1` FOREIGN KEY (`IDBeneficiaire`) REFERENCES `beneficiaires` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `depenses_ibfk_2` FOREIGN KEY (`IDCategorie`) REFERENCES `categories` (`ID`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
