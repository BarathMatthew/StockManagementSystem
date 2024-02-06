package com.stms.controller;

import com.stms.bean.Orders;
import com.stms.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @PostMapping("/insertOrders")
    public void performInsert(@RequestBody Orders order) {
        ordersService.saveOrUpdateOrder(order);
    }

    @PutMapping("/updateOrders")
    public void performUpdate(@RequestBody Orders order) {
        ordersService.saveOrUpdateOrder(order);
    }

    @DeleteMapping("/deleteOrders/{orderId}")
    public void performDelete(@PathVariable Long orderId) {
        ordersService.deleteOrderById(orderId);
    }

    @GetMapping("/findallOrders")
    public List<Orders> viewAllOrders() {
        return ordersService.getAllOrders();
    }
}

