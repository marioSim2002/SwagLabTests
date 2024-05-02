# Bug Report For ST-T13

- **ID number**: #123
- **Name**: CART - Checkout Process Redirects to Invalid Order Summary Page when Cart is Empty
- **Reporter/tester**: Mario Simaan
- **Submit Date**: 26/04/2024
- **Summary**: When a user attempts to checkout while their cart is empty, the website redirects them to a page displaying an invalid order summary page
- **URL**: [SauceDemo Cart](https://www.saucedemo.com/cart.html)

![Screenshot](https://drive.google.com/file/d/16A5L_CaTXJ10ixo7ITqkoXslZOrHX_bM/view?usp=drive_link)

- **Operating System**: Windows 10, Windows 11
- **Browser**: Firefox [Version 125.0.2], Chrome [Version 124.0.2478.67], Microsoft Edge [Version 124.0.2478.67]
- **Severity**: Major
- **Assigned to**: Dev
- **Priority**: Medium

## Description

When a user attempts to checkout while their cart is empty, the website redirects them to a page displaying an order summary. This order summary page is invalid and confusing for the user, as there are no items in the cart to summarize. This behavior violates expected user flow and leads to a poor user experience.

## Steps to reproduce

1. Open the site.
2. Sign in.
3. Navigate to the cart.
4. Make sure the cart is empty.
5. Click 'checkout'.
6. Fill in the details.
7. Click continue.

## Expected result

User gets an error message informing him about the invalid behavior.

## Actual result

The user is redirected to an invalid order summary page, with a total of $0 (look at the provided screenshot).
