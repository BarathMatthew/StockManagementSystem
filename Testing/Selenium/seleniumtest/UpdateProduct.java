package com.stms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class UpdateProduct {
WebDriver driver;
	
	@Test
	public void updateproduct() {
		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");
        driver.findElement(By.id("userName")).sendKeys("Admin");
		driver.findElement(By.id("password")).sendKeys("admin123");
		driver.findElement(By.id("Login")).click();
        System.out.println(driver.getTitle());
        driver.findElement(By.id("productNav")).click();
        driver.findElement(By.id("UpdateProduct")).click();
        driver.findElement(By.id("productId")).sendKeys("31");
        driver.findElement(By.id("productName")).sendKeys("Watch");
		driver.findElement(By.id("productDesc")).sendKeys("Manage-Life");
		driver.findElement(By.id("productPrice")).sendKeys("90");
		driver.findElement(By.id("productQuantity")).sendKeys("30");
		driver.findElement(By.id("updateproduct")).click();
		driver.findElement(By.id("back")).click();
	}
	
	public static void main(String[] args) {
		UpdateProduct obj = new UpdateProduct();
		obj.updateproduct();
	}
}
