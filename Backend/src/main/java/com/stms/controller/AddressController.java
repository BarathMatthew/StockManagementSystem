package com.stms.controller;

import com.stms.bean.Address;
import com.stms.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping("/insertAddresses")
    public void performInsert(@RequestBody Address address) {
        addressService.saveOrUpdateAddress(address);
    }

    @PutMapping("/updateAddresses")
    public void performUpdate(@RequestBody Address address) {
        addressService.saveOrUpdateAddress(address);
    }

    @DeleteMapping("/deleteAddresses/{addressId}")
    public void performDelete(@PathVariable Long addressId) {
        addressService.deleteAddressById(addressId);
    }

    @GetMapping("/findAllAddresses")
    public List<Address> viewAllAddresses() {
        return addressService.getAllAddresses();
    }
}
