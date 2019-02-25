function createStore () {
  // The store should have four parts:
  // 1. The state.
  // 2. Get the state.
  // 3. Listen to changes on the state.
  // 4. Update the state.

  let state
  let listeners =[]

  const getState = () => state

  // Subscribe for all changes. The way to listen to changes on the state.
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      // Unsubscribe for changes.
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  return {
    getState,
    subscribe
  }
}
