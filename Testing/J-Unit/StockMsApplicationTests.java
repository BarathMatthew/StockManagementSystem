package com.stms;

import static org.testng.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

//import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.annotation.Order;

import com.stms.bean.Address;
import com.stms.bean.Orders;
import com.stms.bean.Product;
import com.stms.bean.Response;
import com.stms.bean.User;
import com.stms.service.AddressService;
import com.stms.service.LoginService;
import com.stms.service.OrdersService;
import com.stms.service.ProductService;
import com.stms.service.RegistrationService;
import com.stms.service.UserService;

@SpringBootTest
class StockMsApplicationTests {

	@Autowired
	LoginService lgservice;
	
	@Autowired
	RegistrationService rgservice;
	@Autowired
	UserService urservice;
	
	@Autowired
	ProductService prservice;
	
	@Autowired
	AddressService adservice;
	
	@Autowired
	OrdersService ordService;
	
	boolean res;
	boolean val;
	List<User> list = new ArrayList<>();
	List<User> list1 = new ArrayList<>();
	List<Product> list2 = new ArrayList<>();
	List<Product> list3 = new ArrayList<>();
	List<Product> list4 = new ArrayList<>();
	List<Address> list5 = new ArrayList<>();
	List<Address> list6 = new ArrayList<>();
	List<Orders> list7 = new ArrayList<>();
	List<Orders>  list8 = new ArrayList<>();
	
	User ur=new User(1l,"JohnDoe",1234567890l,"john.doe@example.com","password123","customer");
	User ur1=new User(13l,"manuel",79547l,"manuel@gmail.com","7845","Admin");
	User ur2=new User(25l,"Raina",79548l,"raina@gmail.com","75645","supplier");
	User ur3=new User(26l,"Rainawe",79548l,"raina23@gmail.com","7905645","unknown");
	Response rs1=new Response("Customer Success");
	Response rs2=new Response("Admin Success");
	Response rs3=new Response("Login Fail");
	Product pr1=new Product(14l,"Laptop","General-Laptop",172.8d,45);
	Product pr2=new Product(15l,"Mobile","General-Mobile",182.5d,65);
	Address ad1 = new Address(ur,404,"newton-Street","kallikudi",70980);
	Address ad2 = new Address(ur,505,"killer-street","virudhunagar",80058);
    Orders ord1 = new Orders(14l,2l,4l,10,"Pending"); 
    Orders ord2 = new Orders(15l,1l,4l,20,"Pending"); 
	@Test
     @Order(1)
	  void performUserLogin() {
   	  Response rs=lgservice.login(ur);
   	  rs1.equals(rs);
	  }	
    
     @Test
     @Order(2)
	  void performAdminLogin() {
   	  Response rs=lgservice.login(ur1);
   	  rs2.equals(rs);
	  }
     
     @Test
     @Order(3)
	  void performSupplierLogin() {
   	  Response rs=lgservice.login(ur2);
   	  rs2.equals(rs);
	  }
    
     @Test
     @Order(4)
	  void performLoginFail() {
   	  Response rs=lgservice.login(ur2);
   	  rs3.equals(rs);
	  }
    
    
     @Test
     @Order(5)
     void performRegister() {
   	  val=true;
   	  res=rgservice.registerUser(ur1);
   	  assertEquals(val,res);
     }
     @Test
     @Order(6)
     void performUserInsert() {
   	  val=true;
   	  res=urservice.saveOrUpdateUser(ur);
   	  assertEquals(val,res);
     }
//    
     @Test
     @Order(7)
     void performUserDelete() {
   	  val=true;
   	  res=urservice.deleteUserById(1031l);
   	  assertEquals(val,res);
     }
    
     @Test
     @Order(8)
     void performViewAllUsers() {
   	list1=urservice.getAllUsers();
 		list.add(ur);
 		list.add(ur1);
 		list.equals(list1);
     }
    
    
     @Test
     @Order(9)
     void performProductInsert() {
   	  val=true;
   	  res=prservice.saveOrUpdateProduct(pr1);
   	  assertEquals(val,res);
     }
    
     @Test
     @Order(10)
     void performProductUpdate() {
    	 val=true;
      	  res=prservice.saveOrUpdateProduct(pr1);
      	  assertEquals(val,res);
     }
    
     @Test
     @Order(11)
     void performProductDelete() {
   	  val=true;
   	  res=prservice.deleteProductById(pr1.getProductId());
   	  assertEquals(val,res);
     }
    
     @Test
     @Order(12)
     void performViewAllProducts() {
   	list2=prservice.getAllProducts();
 		list3.add(pr2);
 		list3.equals(list2);
     }
     
    
     @Test
     @Order(15)
     void performAddressDelete() {
   	  val=true;
   	  res=adservice.deleteAddressById(ad1.getAddressId());
   	  assertEquals(val,res);
     }
    
     @Test
     @Order(16)
     void performViewAllAddress() {
   	list5=adservice.getAllAddresses();
 		list6.add(ad1);
 		list6.equals(list5);
     }

     @Test
     @Order(17)
     void performOrderInsert() {
   	  val=true;
   	  res= ordService.saveOrUpdateOrder(ord1);
   	  assertEquals(val,res);
     }
    
     @Test
     @Order(18)
     void performOrderUpdate() {
    	 val=true;
      	  res= ordService.saveOrUpdateOrder(ord2);
      	  assertEquals(val,res);
     }
    
     @Test
     @Order(19)
     void performOrderDelete() {
   	  val=true;
   	  res=ordService.deleteOrderById(ord1.getOrderId());
   	  assertEquals(val,res);
     }
    
     @Test
     @Order(20)
     void performViewAllOrder() {
   	list7=ordService.getAllOrders();
 		list8.add(ord2);
 		list8.equals(list7);
     }

     

}
