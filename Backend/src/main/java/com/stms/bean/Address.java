package com.stms.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="addressId")
    private long addressId;
    @ManyToOne
    @JoinColumn(name="userId", referencedColumnName = "userId")
    private User user;

    @Column(name="doorNo")
    private Integer doorNo;

    @Column(name="Street")
    private String street;

    @Column(name="city")
    private String city;

    @Column(name="pincode")
    private Integer pincode;

	public Address() {
		super();
	}

	public Address(User user, Integer doorNo, String street, String city, Integer pincode) {
		super();
		this.user = user;
		this.doorNo = doorNo;
		this.street = street;
		this.city = city;
		this.pincode = pincode;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getDoorNo() {
		return doorNo;
	}

	public void setDoorNo(Integer doorNo) {
		this.doorNo = doorNo;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Integer getPincode() {
		return pincode;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "Address [addressId=" +addressId +", user=" + user + ", doorNo=" + doorNo + ", street=" + street + ", city=" + city + ", pincode="
				+ pincode + "]";
	}

	public long getAddressId() {
		return addressId;
	}

	public void setAddressId(long addressId) {
		this.addressId = addressId;
	}

    
}

