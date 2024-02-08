package com.stms.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.stms.bean.Address;

public interface AddressRepo extends CrudRepository<Address, Long> {
//	List<Address> findByCity(String city);
}

