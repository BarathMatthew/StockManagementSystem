package com.stms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class InsertProduct {

WebDriver driver;
	
	@Test
	public void insertproduct() {
		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");
        driver.findElement(By.id("userName")).sendKeys("Admin");
		driver.findElement(By.id("password")).sendKeys("admin123");
		driver.findElement(By.id("Login")).click();
        System.out.println(driver.getTitle());
        driver.findElement(By.id("productNav")).click();
        driver.findElement(By.id("InsertProduct")).click();
        driver.findElement(By.id("productName")).sendKeys("Watch");
		driver.findElement(By.id("productDesc")).sendKeys("Manage-Life");
		driver.findElement(By.id("productPrice")).sendKeys("80");
		driver.findElement(By.id("productQuantity")).sendKeys("20");
		driver.findElement(By.id("insertproduct")).click();
		driver.findElement(By.id("back")).click();
	}
	
	public static void main(String[] args) {
		InsertProduct obj = new InsertProduct();
		obj.insertproduct();
	}
}
