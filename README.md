
# Tailwind Table

![Downloads](https://img.shields.io/npm/dt/tailwind-table?style=for-the-badge) ![Version](https://img.shields.io/github/package-json/v/dchueri/tailwind-table?style=for-the-badge) ![Contributors](https://img.shields.io/github/contributors/dchueri/tailwind-table?color=blue&style=for-the-badge)


Simple usage customizable table with TailwindCSS e Typescript
  

### How to use?

The Table component can recives 3 parameters:

  

-  **data**: Array with datas to render on table;

-  *Example*:

```javascript

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

}]

```

-  **columns**: Array with columns that will be displayed in the table.

-  *Example*:

```javascript

[{

title:  "Nome",// Title of column that will be displayed.

key:  "name", // Key of data object that represents this column.

},

{

title:  "Email",

key:  "email",

}]

```

-  **pagination**: Optional. Depending on your pagination method, you can use some techniques to achieve the following information.

-  *Example*:

```javascript

{

currentPage: number;

pagesTotal: number;

itemsPerPage: number;

onClickPrev: MouseEventHandler<HTMLButtonElement>;

onClickNext: MouseEventHandler<HTMLButtonElement>;

}

```

The first three attributes are self-explanatory. The last two are callback functions that will be executed when clicking on the pagination buttons.

  

-  **paginationTexts**: Optional. If you prefer, pass the texts that will appear in the pagination.

-  *Example*:

  

```javascript

{

pageText: "Página", // Page

prevText: "Anterior", // Previous

nextText: "Próxima", // Next

}

```

-  **classNames**: Optional. Object that can contain: *table, thead, tbody*. This add your custom className (tailwind style) to this elements of table.

-  *Example*:

```javascript

{

table: "rounded-lg",

thead: "text-gray-800",

tbody: "bg-white",

}

```

  

You can see the result [here](https://dchueri.github.io/tailwind-table/).

  

### Contributing

Feel free to contribute 😁