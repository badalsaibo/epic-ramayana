import React from 'react';
import { SvgProps } from './interface';

function Hanuman({ size = 16 }: SvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 598 598" fill="currentColor">
      <path
        fill="currentColor"
        d="M326.8 6.933c-20.667 10.8-32.133 24.134-39.467 46L283.6 63.867 271.733 66.8c-40.266 10.133-65.733 27.867-75.2 52.267-4.266 10.8-4.266 31.733-.133 45.2 3.467 11.333 9.867 25.866 13.733 31.2 3.6 5.066 7.734 5.066 26.134-.134 18.266-5.2 47.2-11.2 67.733-14.133 40.133-5.733 86.533-1.333 141.6 13.6 22.933 6.133 25.2 6 30.667-3.333 2.4-3.867 6.133-12.134 8.266-18.4C500 130.533 487.6 99.6 447.333 79.333c-9.333-4.666-29.6-11.6-41.866-14.266-4.934-1.067-5.2-1.334-8.8-12-4.8-14.4-10.934-24.4-20.134-32.934-8-7.466-29.6-19.466-34.8-19.466-1.6.133-8.4 2.933-14.933 6.266ZM354 92.667l10.933 14.666L354 122c-6 8-11.467 14.667-12 14.667-.533 0-6-6.667-12-14.667l-10.933-14.667L330 92.667C336 84.533 341.467 78 342 78c.533 0 6 6.533 12 14.667ZM272.133 113.2c3.734 3.733 4.534 5.6 4.534 10.133 0 4.534-.8 6.4-4.534 10.134C268.4 137.2 266.533 138 262 138c-4.533 0-6.4-.8-10.133-4.533-3.734-3.734-4.534-5.6-4.534-10.134 0-4.533.8-6.4 4.534-10.133 3.733-3.733 5.6-4.533 10.133-4.533 4.533 0 6.4.8 10.133 4.533Zm160 0c3.734 3.733 4.534 5.6 4.534 10.133 0 4.534-.8 6.4-4.534 10.134C428.4 137.2 426.533 138 422 138c-4.533 0-6.4-.8-10.133-4.533-3.734-3.734-4.534-5.6-4.534-10.134 0-4.533.8-6.4 4.534-10.133 3.733-3.733 5.6-4.533 10.133-4.533 4.533 0 6.4.8 10.133 4.533ZM45.333 45.733C28.267 51.6 15.6 63.067 7.067 80.267 1.838 90.723-3.48 108.065 3.2 119.067c4.133 6.533 10.133 9.6 18.8 9.6C40.075 128.667 33.5 70 77 89c17.067 13.133 10.067 28.733 4.867 45.8C65.29 188.806 19 219.992 19 280c0 50.065 25.006 103.887 66.467 133.6l4.133 2.933 6.133-8.933c3.334-4.933 9.467-12.667 13.6-17.333l7.334-8.4-7.467-6.134c-19.733-16.133-35.467-42.933-41.067-70-7.786-37.077 4.53-66.001 24.667-96.4 22.267-33.866 32.533-57.466 35.867-81.733C133.6 91.2 114.8 56.133 84.933 46.133c-10.533-3.6-29.866-3.733-39.6-.4ZM320.667 228.267c0 16.266 1.733 20.933 9.6 25.733 6 3.6 17.466 3.6 23.466 0 7.867-4.8 9.6-9.467 9.6-25.733V214h-42.666v14.267Z"
      />
      <path
        fill="currentColor"
        d="M236 226.8c-3.6.933-10.133 2.133-14.267 2.667L214 230.4v14.933c0 12.134-.4 15.334-2.133 16.8-4.4 3.6-13.067 18-16 26.4-3.6 10-4.267 27.734-1.734 38.534 1.2 4.8 9.6 24.133 12.8 29.6.267.4-3.066 2-7.2 3.6-8.8 3.466-27.333 14.266-38.933 22.8-68.103 50.225-73.827 128.263-75.067 205.6L95.067 598h493.866l9.067-9.067c0-92.559-18.212-187.742-113.6-228.4-4.267-1.733-7.467-3.466-7.333-3.866 3.866-6.8 11.6-24.8 12.8-29.6 2.4-10.267 1.866-28-1.334-37.334-2.8-8.266-12.133-24.133-16.266-27.6-1.867-1.466-2.267-4.4-2.267-16.933V230h-3.6c-2.133 0-9.067-1.2-15.6-2.667-6.667-1.466-12.533-2.666-13.067-2.666-1.733 0-1.333 46.4.4 49.733.934 1.6 4.534 6.133 8.134 9.867 9.2 9.866 12.133 17.066 11.466 28.4-.666 12.8-6.666 24-20.666 38.8-33.467 35.066-83.067 49.466-128.134 37.2-13.2-3.6-32.4-12.8-43.466-20.534-12.667-9.066-28.667-26.533-34.134-37.466-3.6-6.934-4.666-11.067-5.066-18-.667-11.334 2.266-18.534 11.466-28.4 3.6-3.734 7.2-8.267 8.134-9.867.933-1.867 1.466-11.467 1.466-26.267 0-26.533.934-24.8-11.333-21.333Zm6.267 166.267C271.333 414.933 304.8 426 342 426s70.667-11.067 99.867-33.067l11.2-8.4 6.133 2.134c10.533 3.466 10.533 3.333-.933 14.266-44.667 42.667-110.8 57.734-168.534 38.4-24-8-46.533-21.6-64.266-38.666L214.8 390.4l7.333-2.8c4-1.6 7.6-2.8 8.134-2.8.4-.133 5.866 3.6 12 8.267ZM212.4 450.4c30 25.067 62.933 41.6 96.667 48.533l11.6 2.4v9.334c0 15.466 7.2 23.333 21.333 23.333 14.267 0 21.333-7.867 21.333-23.467v-9.466l9.734-1.734c42-7.333 86.8-33.733 122.8-72.4l12.4-13.2 10 10c16.133 16 27.6 33.6 36.266 55.334 6.934 17.333 9.867 34.4 10.934 62.666L566.4 566H502V521.733l-4.533-4.533c-4-4-5.334-4.533-11.467-4.533-6.133 0-7.467.533-11.467 4.533L470 521.733V566H214V521.733l-4.533-4.533c-4-4-5.334-4.533-11.467-4.533-6.133 0-7.467.533-11.467 4.533L182 521.733V566h-64.4l.933-24.267c1.067-28.266 4-45.333 10.934-62.666 8.666-21.6 19.866-38.934 36.133-55.334l10-10.133 12.533 13.467c6.934 7.466 17.867 17.866 24.267 23.333Z"
      />
      <path
        fill="currentColor"
        d="M309.2 298.533c-4 4-4.533 5.467-4.533 11.2 0 9.067 3.066 12.4 18.8 20.267 17.2 8.667 19.866 8.667 37.066 0 15.734-7.867 18.8-11.2 18.8-20.267 0-5.733-.533-7.2-4.533-11.2-6.133-6.133-13.467-6.266-24.8-.533l-8 4-8-4c-11.333-5.733-18.667-5.6-24.8.533Z"
      />
    </svg>
  );
}

export default Hanuman;
