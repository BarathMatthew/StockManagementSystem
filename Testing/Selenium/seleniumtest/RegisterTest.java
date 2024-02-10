package com.stms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class RegisterTest {
	WebDriver driver;
	
	@Test
	public void signUp() {
		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");      
       driver.findElement(By.id("Register")).click();
       System.out.println(driver.getTitle());
       driver.findElement(By.id("userName")).sendKeys("Arun");
       driver.findElement(By.id("mobileNumber")).sendKeys("75468579");
       driver.findElement(By.id("emailId")).sendKeys("Arun12@gmail.com	");
		driver.findElement(By.id("password")).sendKeys("9642123");
		driver.findElement(By.id("userType")).sendKeys("Customer");
		driver.findElement(By.id("Register")).click();
	}
	
	public static void main(String[] args) {
		RegisterTest obj = new RegisterTest();
		obj.signUp();
	}
}
