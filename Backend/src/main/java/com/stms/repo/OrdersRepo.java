package com.stms.repo;

import org.springframework.data.repository.CrudRepository;
import com.stms.bean.Orders;

public interface OrdersRepo extends CrudRepository<Orders, Long> {
}

