package org.launchcode.CoffeeShopDigital.controller;

import org.launchcode.CoffeeShopDigital.model.Products;
import org.launchcode.CoffeeShopDigital.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("api/type")
public class ProductController {

    @Autowired
    private ProductsRepository productsRepository;

    @GetMapping("/products")
    public List<Products> getProducts(){
        return productsRepository.findAll();
    }

    public Optional<Products> getProductById(@RequestParam int productId){
        return productsRepository.findById(productId);
    }
}
