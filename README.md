# "Users"
> Simple CRUD Application
***

[Task specification](./SPECIFICATION.md)

### Current Task List:
- [ ]

### Do later:
- add more vilidation rules in data of Birthd field
- add logOut action
- add header component with current users' name
- to fix warning from moment date formatting in EditEntry component
- add 'push to num page' in fn 'comeback' in EntryEditor component

### Questions:
- 

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