package org.launchcode.CoffeeShopDigital.repository;

import org.launchcode.CoffeeShopDigital.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products, Integer> {
}
