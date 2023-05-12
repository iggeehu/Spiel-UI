import { Svg, Path } from "react-native-svg";
import React from "react";
import { View } from "react-native";

interface IconProps {
  width?: number;
  height?: number;
}

export const SparkIcon = ({ width = 19.5, height = 19.5 }: IconProps) => (
  <View>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height={height}
      width={width}
      stroke="currentColor"
      strokeWidth={2}
      // viewBox="26.5 12.5 24 24"
      viewBox="0 0 22.5 22.5"
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zm8.446-7.189L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456zm-1.365 11.852L16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423z"
      />
    </Svg>
  </View>
);

export const UpperNavDropIcon = ({ width = 10, height = 6 }: IconProps) => (
  <View>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height={height}
      width={width}
      // viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </Svg>
  </View>
);

export const MapIcon = ({ width = 17.5, height = 20.25 }: IconProps) => (
  <View>
    <Svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#2DD4CA"
      class="w-6 h-6"
    >
      <Path
        fill-rule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clip-rule="evenodd"
      />
    </Svg>
  </View>
);

export const MessageIcon = ({ width = 18, height = 17.25 }: IconProps) => (
  <View>
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#000000"
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
      />
    </Svg>
  </View>
);

export const BookmarkIcon = ({ width = 15, height = 18 }: IconProps) => (
  <View>
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000000"
      class="w-6 h-6"
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </Svg>
  </View>
);

export const HomeIcon = ({ width = 19.5, height = 18.28 }: IconProps) => (
  <View>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      // viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#FF453A"
      class="w-6 h-6"
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </Svg>
  </View>
);

export const FriendsIcon = ({ width = 19.5, height = 18 }: IconProps) => (
  <View>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      // viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#717171"
      class="w-6 h-6"
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </Svg>
  </View>
);

export const CreateIcon = ({ width = 20, height = 19 }: IconProps) => (
  <View>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      // viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#717171"
      class="w-6 h-6"
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </Svg>
  </View>
);

export const ListsIcon = ({ width = 20, height = 22 }: IconProps) => (
  <View>
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      // viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#717171"
      class="w-6 h-6"
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </Svg>
  </View>
);

export const ProfileIcon = ({ width = 20, height = 23 }: IconProps) => (
  <View>
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      // viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#717171"
      // class="w-6 h-6"
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </Svg>
  </View>
);
