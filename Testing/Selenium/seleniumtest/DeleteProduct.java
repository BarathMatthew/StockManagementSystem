package com.stms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class DeleteProduct {
WebDriver driver;
	
	@Test
	public void deleteproduct() {
		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");
        driver.findElement(By.id("userName")).sendKeys("Admin");
		driver.findElement(By.id("password")).sendKeys("admin123");
		driver.findElement(By.id("Login")).click();
        System.out.println(driver.getTitle());
        driver.findElement(By.id("productNav")).click();
        driver.findElement(By.id("DeleteProduct")).click();
        driver.findElement(By.id("productId")).sendKeys("30");
		driver.findElement(By.id("deleteproduct")).click();
//		driver.findElement(By.id("back")).click();
	}
	
	public static void main(String[] args) {
		DeleteProduct obj = new DeleteProduct();
		obj.deleteproduct();
	}
}
