export interface User {
    icon: string;
    label: string;
  }
  
  export const allUsers = [
    { icon: "🍅", label: "Participant" },
    { icon: "🥬", label: "Vendors" },
    { icon: "🧀", label: "Organizer" },
    // { icon: "🥕", label: "Placeholder" },
  ];
  
  const [Participant, Spectator, Organizer] = allUsers;
  export const initialTabs = [Participant, Spectator, Organizer];
  
  export function getNextIngredient(
    users: User[]
  ): User | undefined {
    const existing = new Set(users);
    return allUsers.find((user) => !existing.has(user));
  }
  