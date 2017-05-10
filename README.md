# "Users"
> Simple CRUD Application
***

[Task specification](./SPECIFICATION.md)

### Current Task List:
- [ ]

### Do later:
- [ ]

### Questions:
- will this work with promise: function handleSubmit in LoginPanel.jsx ?

***

### Structure DataBase (LocalStorage):

```javascript
{
	usersData: {
		id: {
			name: string,
			email: string,
			dateOfBirth: string
		},
		anotherUserId: {...}
	},
	usersPass: {
		id: string
	}
}
```

***

### Structure app Store:

```javascript
{
	currentUserId: string || null,
	entries: [
		{
			id: string,
			name: string,
			email: string,
			dateOfBirth: string
		},
		{...}
	]
}
```