
package com.stms.controller;

import com.stms.bean.Product;
import com.stms.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/insertProducts")
    public void performInsert(@RequestBody Product product) {
        productService.saveOrUpdateProduct(product);
    }

    @PutMapping("/updateProducts")
    public void performUpdate(@RequestBody Product product) {
        productService.saveOrUpdateProduct(product);
    }

    @DeleteMapping("/deleteProducts/{productId}")
    public void performDelete(@PathVariable Long productId) {
        productService.deleteProductById(productId);
    }

    @GetMapping("/findAllproducts")
    public List<Product> viewAllProducts() {
        return productService.getAllProducts();
    }
}

