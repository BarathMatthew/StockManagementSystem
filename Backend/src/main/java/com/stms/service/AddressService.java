package com.stms.service;

import com.stms.bean.Address;
import com.stms.repo.AddressRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class AddressService {

    @Autowired
    private AddressRepo addressDao;

    public void saveOrUpdateAddress(Address address) {
        addressDao.save(address);
    }

    public void deleteAddressById(Long addressId) {
        addressDao.deleteById(addressId);
    }

    public List<Address> getAllAddresses() {
        Iterator<Address> iterator = addressDao.findAll().iterator();
        List<Address> addressList = new ArrayList<>();
        while (iterator.hasNext()) {
            addressList.add(iterator.next());
        }
        return addressList;
    }
}

