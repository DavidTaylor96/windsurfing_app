import create from 'zustand'


interface IState {
  pressed: boolean;
  setPressed: (newValue: boolean) => void;
}

export const useMarkerPressed = create<IState>(set => ({
  pressed: false,
  setPressed: (newValue: boolean) => set(state => ({
    pressed: state.pressed = newValue,
  })),
}))
