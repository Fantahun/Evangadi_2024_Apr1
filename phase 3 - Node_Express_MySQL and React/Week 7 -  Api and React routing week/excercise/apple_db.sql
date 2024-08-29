-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 29, 2024 at 04:21 AM
-- Server version: 5.7.24
-- PHP Version: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apple_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `ProductId` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `productdescription`
--

CREATE TABLE `productdescription` (
  `description_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_description` varchar(300) NOT NULL,
  `product_brief_description` varchar(1000) NOT NULL,
  `product_img` varchar(500) NOT NULL,
  `product_link` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productdescription`
--

INSERT INTO `productdescription` (`description_id`, `product_id`, `product_description`, `product_brief_description`, `product_img`, `product_link`) VALUES
(1, 1, 'Lots to love. Less to spend.', 'iPhone SE packs our most powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.', 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg', 'https://www.apple.com/shop/buy-iphone/iphonese'),
(2, 2, 'Lots to love. Less to spend.', 'You can either pay for your new iPhone in full or pay monthly with carrier financing, iPhone Payments, the iPhone Upgrade Program, and now Apple Card Monthly Installments. Your carrier service plan will be charged separately. Just choose the option that works for you.', 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-wallpaper-screen-091019_inline.jpg.large.jpg', 'https://www.apple.com/shop/buy-iphone/iphone-11'),
(3, 3, 'Pro cameras. Pro display. Pro performance.', 'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.', 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-11-Pro_Colors_091019_big.jpg.large.jpg', 'https://www.apple.com/shop/buy-iphone/iphone-11-pro'),
(4, 4, 'A cool Phone', 'iPhone 12 and iPhone 12 mini introduce a beautiful new design packed with innovative features, including A14 Bionic, an advanced dual-camera system, and a Super Retina XDR display with the Ceramic Shield front cover', 'https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg', 'https://www.apple.com/ng/newsroom/2020/10/apple-announces-iphone-12-and-iphone-12-mini-a-new-era-for-iphone-with-5g/');

-- --------------------------------------------------------

--
-- Table structure for table `productprice`
--

CREATE TABLE `productprice` (
  `price_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `starting_price` decimal(10,2) NOT NULL,
  `price_range` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productprice`
--

INSERT INTO `productprice` (`price_id`, `product_id`, `starting_price`, `price_range`) VALUES
(1, 1, '399.00', 'From $9.54/mo. or $229 with trade-in.'),
(2, 2, '499.00', 'From $18.70/mo. or $449 with trade-in.'),
(3, 3, '679.00', 'From $28.29/mo. or $679 with trade-in.'),
(4, 4, '599.00', 'From $28.70/mo. or $599 with trade-in.');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_url` varchar(500) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_img` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_url`, `product_name`, `product_img`) VALUES
(1, 'iphonese', 'iPhone SE', 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg'),
(2, 'iphone11', 'iPhone 11', 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-wallpaper-screen-091019_inline.jpg.large.jpg'),
(3, 'iphone11pro', 'iPhone 11 Pro', 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-11-Pro_Colors_091019_big.jpg.large.jpg'),
(4, 'iphone12', 'Iphone 12', 'https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_2-up_geo_10132020_inline.jpg.large.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `User_name` varchar(50) DEFAULT NULL,
  `User_password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `ProductId` (`ProductId`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `productdescription`
--
ALTER TABLE `productdescription`
  ADD PRIMARY KEY (`description_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `productprice`
--
ALTER TABLE `productprice`
  ADD PRIMARY KEY (`price_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productdescription`
--
ALTER TABLE `productdescription`
  MODIFY `description_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `productprice`
--
ALTER TABLE `productprice`
  MODIFY `price_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`ProductId`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `productdescription`
--
ALTER TABLE `productdescription`
  ADD CONSTRAINT `productdescription_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `productdescription_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `productprice`
--
ALTER TABLE `productprice`
  ADD CONSTRAINT `productprice_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
