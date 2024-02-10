package com.stms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class UpdateUser {
WebDriver driver;
	
	@Test
	public void updateUser() {
		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");
        driver.findElement(By.id("userName")).sendKeys("Admin");
		driver.findElement(By.id("password")).sendKeys("admin123");
		driver.findElement(By.id("Login")).click();
        System.out.println(driver.getTitle());
        driver.findElement(By.id("userNav")).click();
        System.out.println(driver.getTitle());
        driver.findElement(By.id("UpdateUser")).click();
        driver.findElement(By.id("userId")).sendKeys("17");
        driver.findElement(By.id("userName")).sendKeys("Arun");
       driver.findElement(By.id("mobileNumber")).sendKeys("75468579");
       driver.findElement(By.id("emailId")).sendKeys("Arun12@gmail.com	");
		driver.findElement(By.id("password")).sendKeys("8642123");
		driver.findElement(By.id("userType")).sendKeys("Customer");
		driver.findElement(By.id("UpdateUser")).click();
	}
	
	public static void main(String[] args) {
		UpdateUser obj = new UpdateUser();
		obj.updateUser();
	}
}
