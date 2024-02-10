package com.stms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class PlaceOrder {

	WebDriver driver;
	
	@Test
	public void placeOrder() {

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");
        driver.findElement(By.id("userName")).sendKeys("Admin");
		driver.findElement(By.id("password")).sendKeys("admin123");
		driver.findElement(By.id("Login")).click();
        System.out.println(driver.getTitle());
        driver.findElement(By.id("PlaceOrder")).click();
        driver.findElement(By.id("productId")).sendKeys("2");
		driver.findElement(By.id("userId")).sendKeys("4");
		driver.findElement(By.id("orderQuantity")).sendKeys("50");
		driver.findElement(By.id("PlaceOrder")).click();
		driver.findElement(By.id("back")).click();
	}
	
	public static void main(String[] args) {
		PlaceOrder obj = new PlaceOrder();
		obj.placeOrder();
	}
}
