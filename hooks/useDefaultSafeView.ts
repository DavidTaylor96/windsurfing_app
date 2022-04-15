import { useSafeAreaInsets } from 'react-native-safe-area-context';



class ISafeViewProps {
  defaultBottom = 15;
  defaultTop = 15;
  defaultLeft = 10;
  defaultRight = 10;
}

export default function useDefaultSafeView(options = new ISafeViewProps()) {


  let insets = useSafeAreaInsets();

  if (insets.bottom < options.defaultBottom) {
    insets.bottom = options.defaultBottom;
  }

  if (insets.top < options.defaultTop) {
    insets.top = options.defaultTop;
  }

  if (insets.left < options.defaultLeft) {
    insets.left = options.defaultLeft;
  }

  if (insets.right < options.defaultRight) {
    insets.right = options.defaultRight;
  }

  return insets;
}
