package com.stms.seleniumtest;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class LoginTest {
	WebDriver driver;
		
	@Test
	public void login() {
		driver = new ChromeDriver();
		driver.navigate().to("http://localhost:4200/");
        driver.findElement(By.id("userName")).sendKeys("Admin");
	    driver.findElement(By.id("password")).sendKeys("admin123");
		driver.findElement(By.id("Login")).click();
		System.out.println(driver.getTitle());
		driver.findElement(By.id("Logout")).click();
		System.out.println(driver.getTitle());
		driver.findElement(By.id("userName")).sendKeys("barath");
	    driver.findElement(By.id("password")).sendKeys("123123");
		driver.findElement(By.id("Login")).click();
        System.out.println(driver.getTitle());
        driver.findElement(By.id("Logout")).click();
		System.out.println(driver.getTitle());
		driver.findElement(By.id("userName")).sendKeys("manuel");
	    driver.findElement(By.id("password")).sendKeys("7845");
		driver.findElement(By.id("Login")).click();
        System.out.println(driver.getTitle());
        driver.findElement(By.id("Logout")).click();
		System.out.println(driver.getTitle());
		
	}
	
	public static void main(String[] args) {
		LoginTest obj = new LoginTest();
		obj.login();
	}

}

