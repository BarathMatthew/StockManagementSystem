package com.stms.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class UpdateOrder {
WebDriver driver;
	
	@Test
	public void updateOrder() {

		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");
        driver.findElement(By.id("userName")).sendKeys("barath");
		driver.findElement(By.id("password")).sendKeys("123123");
		driver.findElement(By.id("Login")).click();
        System.out.println(driver.getTitle());
        driver.findElement(By.id("updateStatus")).click();
        driver.findElement(By.id("orderId")).sendKeys("28");
        driver.findElement(By.id("productId")).sendKeys("2");
		driver.findElement(By.id("userId")).sendKeys("4");
		driver.findElement(By.id("orderQuantity")).sendKeys("50");
		driver.findElement(By.id("orderStatus")).sendKeys("Approve");
		driver.findElement(By.id("updateStatus")).click();
		driver.findElement(By.id("back")).click();
	}
	
	public static void main(String[] args) {
		UpdateOrder obj = new UpdateOrder();
		obj.updateOrder();
	}

}
