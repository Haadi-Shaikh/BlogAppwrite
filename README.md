## Bookstore – Usage Instructions

Live website: https://2fbookstore.netlify.app/

This is a full-stack bookstore application built with React, Redux Toolkit, Appwrite, and Tailwind CSS.

### Customer Flow

1. Open the home page to browse available books.
2. Filter the Top Sellers section by category.
3. Click a book to view its author, category, publication date, and description.
4. Click **Add to Cart** to add the book to your shopping cart.
5. Open the cart to review the selected books and subtotal.
6. Create an account or log in before continuing to checkout.
7. Complete the checkout form to place an order.
8. Open the Orders page to view previously placed orders.

### Main Routes

| Route                      | Purpose                                       | Access         |
| -------------------------- | --------------------------------------------- | -------------- |
| `/`                        | Browse books and categories                   | Public         |
| `/books/:id`               | View an individual book                       | Public         |
| `/cart`                    | View and manage the shopping cart             | Public         |
| `/signup`                  | Create a customer account                     | Public         |
| `/login`                   | Log in to a customer account                  | Public         |
| `/checkout`                | Enter delivery information and place an order | Login required |
| `/orders`                  | View the customer’s orders                    | Login required |
| `/admin`                   | Log in as an administrator                    | Public         |
| `/dashboard`               | Open the admin dashboard                      | Admin required |
| `/dashboard/add-book`      | Add a new book                                | Admin required |
| `/dashboard/manage-books`  | View and manage all books                     | Admin required |
| `/dashboard/edit-book/:id` | Edit an existing book                         | Admin required |

### Administrator Flow

1. Open the [Admin Login page](https://2fbookstore.netlify.app/admin).
2. Log in using an administrator account.
   Sample Demo Account : {
   Email : "admin@gmail.com"
   password : "admin123"
   }
3. Use the dashboard to add new books.
4. Open **Manage Books** to edit or delete existing books.
5. Changes made by the administrator are reflected in the customer storefront.
