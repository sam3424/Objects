
/*
 Create an alienShip object. It should contain a method retreat() which will console.log() the retreatMessage.




2. Add another method to your object literal. This method, takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.

3. Invoke your two methods: first .retreat() then .takeOff().
*/

// let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// // Write your code below
// let alienShip = {
// 	retreatMessage() {
// 		retreatMessage: 'caring  is good'
//          console.log(retreatMessage)
// 	},
//     takeOff(){
//         console.log('spim ....')
//         alienShip.retreatMessage()
//         alienShip.takeOff()
//     }
    
// }



const employee = {
	personal: {
		firstName: 'John',
		lastName: 'Doe',
		age: 30,
		address: {
			street: '123 Main St',
			city: 'New York',
			state: 'NY',
			country: 'USA',
		},
		hobbies: ['reading', 'playing guitar', 'coding'],
		family: {
			siblings: ['Jane', 'Mark'],
			parents: {
				mother: 'Mary',
				father: 'David',
			},
		},
	},
	professional: {
		occupation: 'Software Engineer',
		company: 'ABC Corp',
		projects: [
			{
				name: 'Project A',
				clients: ['Client A', 'Client B'],
				team: [
					{
						name: 'Sarah',
						role: 'Designer',
					},
					{
						name: 'Michael',
						role: 'Developer',
					},
				],
			},
			{
				name: 'Project B',
				clients: ['Client C'],
				team: [
					{
						name: 'Emily',
						role: 'Project Manager',
					},
					{
						name: 'Alex',
						role: 'Developer',
					},
				],
			},
		],
	},
}