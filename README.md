# "Birthdays entries"
> Simple CRUD Application
***

This is a simple client-side application which is built on ReactJS using Redux architecture, routing and localStorage as data base. It developed as a test task which you can look at the link below.

[Task specification](./SPECIFICATION.md)

### Online example

[Link](https://birthdays-entries.herokuapp.com)

### Current ToDo List:
- configure webpack (chunks)
- move lazyLoader files
- add polyfill for IE (Promise)
- optimize importing libs (moment, etc.)
- add in server redirect from 404 to main page
- refresh the example

### Questions:
- jQuery & React?
- #lleo_dialog in <style></style>, wtf?

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