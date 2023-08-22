package org.launchcode.CoffeeShopDigital.model;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "products")
public class Products {

    @Id
    @GeneratedValue
    private int id;

    private String  product_photo;

    @NotNull
    private String product_name;

    private double product_price;

    public Products() {
    }

    public Products(String  product_photo, String product_name, double product_price) {
        this.product_photo = product_photo;
        this.product_name = product_name;
        this.product_price = product_price;
    }

    public String  getProduct_photo() {
        return product_photo;
    }

    public void setProduct_photo(String  product_photo) {
        this.product_photo = product_photo;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public double getProduct_price() {
        return product_price;
    }

    public void setProduct_price(double product_price) {
        this.product_price = product_price;
    }
}
