package com.stms.repo;

import org.springframework.data.repository.CrudRepository;
import com.stms.bean.Product;

public interface ProductRepo extends CrudRepository<Product, Long> {
}
