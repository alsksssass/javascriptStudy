/*
Chapter 36

### 문제 1
복잡한 객체에서 필요한 데이터만 추출하여 새로운 객체를 만드세요.

*/

// Your solution
const complexObject = {
  id: 101,
  name: "John Doe",
  isActive: true,
  profile: {
    age: 28,
    gender: "male",
    address: {
      street: "123 Main St",
      city: "New York",
      zipCode: "10001",
      country: "USA"
    },
    contacts: [
      {
        type: "email",
        value: "johndoe@example.com"
      },
      {
        type: "phone",
        value: "+1-555-1234"
      }
    ]
  },
  preferences: {
    language: "English",
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: true
    }
  },
  friends: [
    {
      id: 102,
      name: "Alice",
      mutualFriends: [
        { id: 103, name: "Bob" },
        { id: 104, name: "Charlie" }
      ]
    },
    {
      id: 105,
      name: "Eve",
      mutualFriends: [
        { id: 106, name: "Grace" }
      ]
    }
  ],
  activities: [
    { date: "2024-11-01", type: "workout", description: "Morning gym session" },
    { date: "2024-11-05", type: "meeting", description: "Business meeting with clients" }
  ],
  settings: {
    notifications: {
      email: {
        enabled: true,
        frequency: "daily"
      },
      sms: {
        enabled: false,
        frequency: "weekly"
      }
    },
    security: {
      twoFactorAuth: true,
      passwordStrength: "strong"
    }
  },
  getFullName: function() {
    return this.name;
  },
  getFullAddress: function() {
    return `${this.profile.address.street}, ${this.profile.address.city}, ${this.profile.address.zipCode}, ${this.profile.address.country}`;
  },
  toggleActiveStatus: function() {
    this.isActive = !this.isActive;
  },
  addFriend: function(friend) {
    this.friends.push(friend);
  }
};

const { name: username, friends, ...others } = complexObject;
console.log(username, friends, others); 

