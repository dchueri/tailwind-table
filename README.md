# Tailwind Table
![Version](https://img.shields.io/github/package-json/v/dchueri/tailwind-table?style=for-the-badge) ![Contributors](https://img.shields.io/github/contributors/dchueri/tailwind-table?color=blue&style=for-the-badge)

### How to use?
The Table component can recives 3 parameters:

 - **data**: Array with datas to render on table;
	 - *Example*:
		 ```javascript
		// Data
		[{
			name:  "Sofia Oliveira",
			email:  "sofia.oliveira@example.com",
			status:  "Ativo",
			role:  "Admin",
		},
		{
			name:  "João Santos",
			email:  "joao.santos@example.com",
			status:  "Suspenso",
			role:  "Usuário",
		}, ...]
		```
		
 - **columns**: Array with columns that will be displayed in the table.
	 - *Example*:
		```javascript
		// Columns
		[{
		  title: "Nome",// Title of column that will be displayed.
		  key: "name",   // Key of data object that represents this column.
		}, 
		{
		  title: "Email",
		  key: "email",
		},
		{
		  title: "Status",
		  key: "status",
		}]
		```
- **classNames**: Optional. Object that can contain: *table, thead, tbody*. This add your custom className (tailwind style) to this elements of table.
	- *Example*:
		```javascript
		//classNames
		{
		  table: "rounded-lg",
		  thead: "text-gray-800",
		  tbody: "bg-white",
		}
		```

You can see the result [here](https://dchueri.github.io/tailwind-table/).
