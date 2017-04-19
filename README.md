# "Users"
> Simple CRUD Application
***

[Task specification](./SPECIFICATION.md)

### Current Task List:
- [ ]

### Do later:
- [ ]

### Questions:
- "create entry page" - where is the pass?
- "dateOfBirth" - is date of registration?

***

### Structure DataBase (LocalStorage):

```javascript
{
	usersData: {
		id: {
			name: string,
			email: string,
			dateOfBirth: number,
			password: string
		},
		anotherUserId: {...}
	}
}
```

***

### Structure app Store:

```javascript
{
	isLogin: boolean,
	currentUserId: string || null,
	users: [
		{
			id: string,
			name: string,
			email: string,
			dateOfBirth: number
		},
		{...}
	]
}
```