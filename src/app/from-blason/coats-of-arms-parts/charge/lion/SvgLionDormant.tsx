import React from 'react';
import { Dimension } from '../../../../model/dimension';

// Thanks to https://en.wikipedia.org/wiki/File:Lion_Dormant.svg

const SvgLionDormant = (props: {
  dimension: Dimension;

  stroke: string;
  mainFill: string;
  clawFill: string;
}) => (
  <svg width={props.dimension.width} height={props.dimension.height} viewBox="0 0 480 270">
    <g stroke={props.stroke}>
      <path
        d="M214.662 112.623s26.684 11.225 38.796 13.494c6.967 1.305 16.526.717 23.614.843 19.226.344 44.868 0 64.096 0 9.868 0 23.362-2.56 32.892 0 10.73 2.882 23.413 11.565 32.048 18.555 8.215 6.65 16.202 18.61 23.615 26.144 3.64 3.7 7.984 9.532 12.65 11.807 4.375 2.134 9.333.766 13.36 3.5 6.571 4.458 14.608 14.014 16.158 21.802.7 3.509-.216 8.545-1.686 11.807-2.684 5.952-10.536 9.923-16.048 13.424-2.435 1.547-6.418 2.148-9.277 2.53-2.257.303-4.959-.454-7.106-1.21-4.7-1.656-7.232-4.58-11.49-6.053-1.912-.662-5.049-1.103-6.746 0-2.09 1.358-2.346 1.47-2.466 3.96-.077 1.598 2.554 3.715 1.687 5.06-3.791 5.876-14.524 4.595-25.244 4.487-11.897-.12-23.672.573-23.672.573s-7.285-.108-9.864 1.404c-1.19.698-2.585 2.292-2.786 3.656-.315 2.139 2.53 6.747 2.53 6.747s-4.175.385-5.904 0c-2.486-.554-5.831-1.86-7.688-3.604-2.258-2.118-2.512-7.156-4.963-9.047-2.478-1.911-10.12-2.53-10.12-2.53s-6.02 9.169-10.12 10.964c-1.623.71-5.904 0-5.904 0l-13.494-10.12 3.113-4.122-8.143 2.401-12.064-7.753-11.58-.647s-4.086-5.608-4.218-8.433c-.226-4.882 5.904-15.181 5.904-15.181l-6.747 10.964s-7.447-4.634-11.061-5.378c-11.3-2.327-38.417 1.783-38.417 1.783l-65.22-36.887 58.192-68.314 3.373 3.374z"
        fill={props.mainFill}
        fillRule="evenodd"
        strokeWidth={3}
      />
      <path
        d="M274.379 207.48s1.366-1.31 3.272-2.249c11.623-5.723 30.23-.177 43.185 0 9.46.13 22.08.298 31.525.864 7.013.42 16.552.273 23.32 2.16 4.577 1.275 11.728 2.883 14.25 6.909 1.445 2.306-2.712 8.856 0 9.069 2.485.195-.386-6.367 1.296-8.205 2.164-2.365 10.365-2.591 10.365-2.591"
        fill="none"
        strokeWidth={3}
      />
      <path
        d="M292.594 228.857c1.398.502 3.066 1.75 4.027 2.903.981 1.178 2.433 3.084 2.236 4.655-.126 1.001-1.288 2.062-2.126 2.601-.6.385-1.572.567-2.268.579-1.469.024-3.3-1.313-4.755-1.061-1.273.22-2.821 1.327-3.73 2.295-1.284 1.369-2.051 1.921-2.574 3.736-.4 1.388-.368 6.083-.368 6.083s-3.753-3.895-4.43-5.85c-.986-2.855-1.08-5.97.18-8.78.796-1.775 2.886-3.572 4.492-4.617 1.982-1.289 5.033-2.342 7.33-2.675.595-.086 1.427-.07 1.986.13zM308.141 241.38c1.398.502 3.066 1.751 4.026 2.904.982 1.178 2.434 3.084 2.236 4.654-.125 1.002-1.288 2.062-2.126 2.602-.599.385-1.571.567-2.267.578-1.47.025-3.3-1.313-4.755-1.06-1.274.22-2.822 1.327-3.73 2.295-1.285 1.368-2.052 1.921-2.575 3.735-.4 1.389-.367 6.084-.367 6.084s-3.754-3.896-4.43-5.85c-.987-2.855-1.08-5.97.18-8.78.796-1.776 2.885-3.573 4.491-4.617 1.982-1.29 5.033-2.342 7.33-2.675.595-.086 1.427-.071 1.987.13z"
        fill={props.clawFill}
        fillRule="evenodd"
        strokeWidth={2.5}
      />
      <path
        d="M304.862 236.449s9.218-7.559 14.247-9.193c4.205-1.367 10.265-1.101 14.683-1.296M286.853 229.663s.316-2.56 1.983-4.47c2.024-2.32 5.627-4.151 7.817-5.279 4.772-2.457 9.832-3.695 15.17-4.263"
        fill="none"
        strokeWidth={2.5}
      />
      <path
        d="M433.308 201.008s4.44 1.633 6.062 2.845c1.504 1.122 2.602 3.602 3.178 5.389.549 1.704 1.528 3.014 1.024 4.731-.52 1.774-2.304 4.523-3.668 5.77-1.99 1.82-3.42 3.096-5.634 4.635-.916.637-2.58 1.652-4.112 2.563-1.806 1.074-3.43 2.005-3.43 2.005s6.609-7.246 8.2-11.19c.973-2.41.798-6.06.54-8.645-.248-2.503-2.16-8.103-2.16-8.103z"
        fillRule="evenodd"
        strokeWidth={5}
      />
      <path
        d="M348.048 147.43s.743 6.696-.793 8.862c-2.428 3.424-9.529 2.893-12.683 5.639-2.355 2.05-5.507 5.005-6.638 7.939-1.94 5.031-2.752 13.283-2.082 18.644.429 3.433 2.332 8.043 4.756 10.472 3.336 3.342 12.999 6.629 12.999 6.629"
        fill="none"
        strokeWidth={3}
      />
      <path
        d="M330.123 198.336s-12.49-5.68-16.747-9.753c-3.807-3.643-8.196-9.72-9.724-14.916-.918-3.121-1.287-7.93 0-10.9 1.249-2.883 4.68-6.047 7.563-6.884 2.699-.784 3.211-.086 5.618 1.43 1.785 1.124 2.127 10.107 2.127 10.107s6.659-13.134 3.351-16.647c-1.053-1.119-2.65-3.67-4.696-4.864-2.542-1.482-5.63-1.5-7.48-1.5-4.01 0-12.966 3.442-12.966 3.442s3.705-12.497 6.483-17.211c2.556-4.338 6.398-10.552 10.805-12.622 6.817-3.203 17.768 2.472 24.85 0 3.634-1.268 7.122-5.716 10.265-8.032 3.656-2.693 8.129-7.372 12.425-8.605 3.133-.9 8.087-1.31 10.805.574 1.517 1.052 2.952 3.831 2.7 5.737-.365 2.774-5.942 6.884-5.942 6.884s11.82-.22 14.587-4.016c2.38-3.267 1.665-10.036 0-13.769-.987-2.21-3.81-4.24-5.943-5.163-5.123-2.216-12.836-1.77-18.368-1.721-3.096.028-10.264 1.147-10.264 1.147s6.48-7.387 6.454-11.828c-.019-3.202-1.636-6.438-4.293-7.95-3.147-1.789-8.794.521-8.794.521s4.345 3.043 4.862 5.164c.296 1.213-.24 3.135-1.08 4.016-1.315 1.379-4.124 1.376-5.943 1.72-3.683.698-15.517-.822-15.517-.822s12.279-13.467 17.053-20.162c2.671-3.745 5.565-9.526 7.848-13.55 1.508-2.658 3.812-6.796 6.433-8.168 2.185-1.144 5.98-.697 8.103.574 1.724 1.031 3.782 5.737 3.782 5.737s2.07-9.245.59-12.35c-1.572-3.297-5.237-5.945-8.615-6.831-2.675-.702-7.212.974-9.803 1.97-1.19.457-3.241 2.868-3.241 2.868s2.17-7.822 1.08-10.9c-1.02-2.885-2.765-6.5-5.354-9.026-2.732-2.666-6.358-4.197-9.232-5.317-3.503-1.365-8.837-.513-12.425.574-2.861.867-6.327 3.18-8.644 5.163-3.04 2.601-4.702 6.397-5.943 10.327-1.291 4.093-1.322 10.86 1.08 14.342 3.31 4.796 9.491 8.271 14.793 6.364 3.028-1.089 5.196-8.658 5.196-8.658s-5.548 2.943-7.563 1.72c-1.335-.809-1.706-3.532-1.62-5.163.128-2.46 1.286-6.13 3.24-7.458 1.912-1.298 5.547-1.102 7.564 0 2.48 1.355 4.817 5.137 5.402 8.032.694 3.432-.895 8.231-2.16 11.474-1.79 4.587-5.514 10.082-8.644 13.769-4.086 4.812-11.155 9.408-15.667 13.769-4.068 3.932-9.548 9.191-12.966 13.769-3.437 4.603-7.168 11.427-9.724 16.637-2.85 5.813-6.657 13.708-8.103 20.08-1.675 7.379-2.74 16.564-2.445 24.148.222 5.74 1.615 14.652 3.525 20.026 1.905 5.36 6.288 14.099 9.184 18.933 2.776 4.633 6.056 9.661 9.724 12.621 2.818 2.274 6.544 6.271 8.458 6.835"
        fill={props.mainFill}
        fillRule="evenodd"
        strokeWidth={3}
      />
      <path
        d="M326.669 82.129s-5.878.596-8.077 1.805c-2.163 1.19-4.157 4.118-5.95 5.869-1.397 1.362-3.03 6.864-3.03 3.348M350.473 91.608s-6.735 4.628-9.777 6.32c-2.225 1.238-5.182 3.123-7.651 3.611-2.51.497-5.987-.924-8.502-.451-3.545.666-9.68 8.461-9.68 8.461M297.821 147.7s-6.975 4.895-7.1 12.864c-.139 8.986 3.554 16.508 3.554 16.508"
        fill="none"
        strokeWidth={3}
      />
      <path d="M302.625 203.568l12.86 1.183" fill="none" strokeWidth={2.5} />
    </g>
    <path
      d="M217.603 132.969c5.671 16.347-1.3 57.66-1.3 57.66s1.869 4.16 2.167 6.07c.602 3.858 1.86 9.847-.434 13.007-1.788 2.464-6.539 2.94-9.537 3.468-7.814 1.376-20.614 3.252-28.18.867-4.543-1.432-12.573-6.937-12.573-6.937s-1.084 3.635-.867 5.203c.334 2.42.692 2.387 2.167 4.335 1.56 2.058 6.07 3.902 6.07 3.902s-10.19 2.28-15.608.867c-5.065-1.32-11.568-4.474-15.607-7.804-1.646-1.356-10.405-5.202-10.405-5.202l-10.405-.867s-.225 4.662.433 6.503c1.13 3.16 9.972 6.937 9.972 6.937s-12.382 1.674-16.908 0c-2.597-.961-6.746-1.258-10.074-3.3-3.662-2.247-6.513-6.242-9.436-7.105-2.259-.668-7.803-.867-7.803-.867s-6.794 2.605-6.937 5.202c-.156 2.848 6.937 6.503 6.937 6.503s-8.644 1.023-12.14 0c-3.705-1.084-8.41-3.935-10.838-6.937-1.398-1.728-2.601-5.636-2.601-5.636s-4.226 8.167-7.804 10.405c-1.507.943-8.988-6.847-3.462-20.786 3.453-8.708 33.905-26.06 39.898-25.74 2.703.145 5.356-8.316 12.62.844 15.724 19.83 45.908-27.067 45.908-27.067s15.349-3.376 20.358-12.658c2.83-5.243 10.342-9.97 16.041-11.706 6.35-1.934 16.162-2.078 22.11.867 3.478 1.722 6.966 6.306 8.238 9.972z"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={3}
    />
    <path
      d="M31.385 206.264s7.199-6.137 10.715-8.108c2.28-1.279 5.547-2.664 8.108-3.186 6.217-1.266 9.582-.69 9.582-.69"
      fill="none"
      stroke={props.stroke}
      strokeWidth={2.5}
    />
    <g stroke={props.stroke}>
      <g fillRule="evenodd">
        <path
          d="M235.314 156.583c5.671 16.347-1.3 57.661-1.3 57.661s1.869 4.16 2.167 6.07c.602 3.857 1.859 9.846-.434 13.006-1.788 2.464-6.54 2.94-9.538 3.468-7.813 1.377-20.613 3.253-28.18.867-4.542-1.432-12.573-6.936-12.573-6.936s-1.083 3.635-.867 5.202c.335 2.42.693 2.388 2.168 4.336 1.559 2.058 6.07 3.902 6.07 3.902s-10.19 2.28-15.608.867c-5.065-1.321-11.568-4.474-15.607-7.804-1.646-1.357-10.405-5.203-10.405-5.203l-10.405-.867s-.225 4.662.433 6.503c1.13 3.16 9.972 6.937 9.972 6.937s-12.382 1.675-16.908 0c-2.598-.96-6.747-1.258-10.074-3.3-3.663-2.247-6.513-6.242-9.436-7.105-2.259-.667-7.804-.867-7.804-.867s-6.794 2.605-6.936 5.202c-.156 2.849 6.936 6.504 6.936 6.504s-8.643 1.022-12.139 0c-3.705-1.085-8.41-3.936-10.838-6.937-1.398-1.728-2.601-5.636-2.601-5.636s-4.226 8.166-7.804 10.405c-2.448 1.532-9.538 1.3-9.538 1.3s-12.339-2.811-15.174-6.936c-1.181-1.718-.434-6.937-.434-6.937s-6.728 4.037-9.728 3.157c-3.276-.962-7.613-8.793-7.613-8.793l.988-9.051s-5.81 3.937-8.322 3.018c-2.472-.904-4.603-5.847-3.938-7.84 2.457-7.364 14.653-11.284 22.11-13.44 14.996-4.335 36.549-2.903 52.025-.867 2.817.37 6.278 2.316 9.105 2.601 25.18 2.541 84.107-6.503 84.107-6.503s-3.276-25.834 1.734-35.117c2.83-5.242 10.342-9.97 16.04-11.705 6.351-1.934 16.163-2.079 22.111.867 3.478 1.721 6.966 6.305 8.238 9.971z"
          fill={props.mainFill}
          strokeWidth={3}
        />
        <path
          d="M21.204 207.767c1.458.282 3.298 1.26 4.423 2.252 1.15 1.014 2.878 2.675 2.923 4.257.029 1.01-.957 2.235-1.703 2.897-.532.472-1.466.8-2.151.92-1.448.249-3.462-.793-4.862-.32-1.225.413-2.585 1.743-3.334 2.839-1.06 1.55-1.733 2.213-1.972 4.086-.183 1.434.569 6.068.569 6.068s-4.306-3.274-5.273-5.102c-1.413-2.67-1.983-5.734-1.168-8.704.514-1.877 2.304-3.973 3.73-5.25 1.762-1.578 4.615-3.086 6.834-3.767.575-.176 1.4-.289 1.984-.176zM35.814 221.206c1.458.283 3.298 1.261 4.423 2.253 1.151 1.014 2.878 2.674 2.923 4.257.03 1.009-.957 2.235-1.702 2.896-.533.473-1.466.801-2.152.92-1.448.25-3.462-.792-4.861-.32-1.225.413-2.585 1.744-3.335 2.84-1.06 1.549-1.733 2.212-1.972 4.085-.183 1.434.57 6.068.57 6.068s-4.307-3.274-5.274-5.101c-1.413-2.67-1.983-5.735-1.168-8.705.515-1.876 2.304-3.972 3.731-5.25 1.761-1.578 4.615-3.086 6.833-3.767.575-.176 1.4-.289 1.984-.176zM57.174 235.267c1.47-.215 3.53.102 4.919.667 1.42.577 3.599 1.576 4.163 3.055.36.943-.166 2.425-.652 3.296-.347.621-1.12 1.24-1.728 1.577-1.285.713-3.53.394-4.695 1.302-1.02.794-1.865 2.499-2.211 3.78-.49 1.812-.906 2.66-.514 4.508.3 1.414 2.538 5.54 2.538 5.54s-5.145-1.67-6.66-3.077c-2.215-2.055-3.763-4.76-3.974-7.832-.133-1.94.865-4.51 1.79-6.187 1.143-2.07 3.34-4.435 5.21-5.81.484-.355 1.225-.733 1.814-.82z"
          fill={props.clawFill}
          strokeWidth={2.5}
        />
      </g>
      <path
        d="M32.01 215.4s9.861-6.423 13.9-7.82c3.27-1.13 7.864-1.872 11.294-2.317M49.096 229.879s7.199-6.137 10.715-8.109c2.28-1.278 5.547-2.664 8.108-3.185 6.217-1.266 9.582-.69 9.582-.69"
        fill="none"
        strokeWidth={2.5}
      />
    </g>
    <g stroke={props.stroke}>
      <path
        d="M100.467 169.252c-10.992 3.404-30.466 6.919-38.288 15.359-3.787 4.086-9.294 11.326-8.022 16.75.644 2.741 4.923 4.434 7.397 5.78 3.798 2.066 6.982 1.434 9.78 4.73 2.696 3.178 3.19 10.778 6.186 13.676 2.713 2.623 8.901 2.95 12.465 1.708 6.01-2.096 14.672-15.326 14.672-15.326l12.358 1.086s11.789-8.695 12.911-14.384c.856-4.34-4.942-13.889-4.942-13.889l37.428-31.784s-46.136 11.398-61.945 16.294z"
        fill={props.mainFill}
        fillRule="evenodd"
        strokeWidth={3}
      />
      <path
        d="M55.253 200.85c1.209-.862 3.186-1.521 4.68-1.653 1.528-.135 3.921-.242 5.1.815.75.675.96 2.234.925 3.23-.025.712-.43 1.614-.817 2.193-.817 1.221-2.96 1.963-3.582 3.302-.544 1.173-.517 3.075-.24 4.373.392 1.836.41 2.781 1.602 4.245.913 1.12 4.79 3.77 4.79 3.77s-5.34.863-7.332.305c-2.909-.816-5.521-2.515-7.112-5.152-1.005-1.666-1.29-4.407-1.234-6.322.07-2.363.944-5.47 1.98-7.547.268-.539.755-1.213 1.24-1.559zM80.63 217.572c1.209-.862 3.185-1.52 4.68-1.653 1.527-.135 3.92-.242 5.099.815.75.675.96 2.234.925 3.23-.024.712-.43 1.615-.816 2.193-.817 1.221-2.96 1.963-3.582 3.303-.545 1.172-.518 3.075-.24 4.373.392 1.835.409 2.78 1.601 4.244.913 1.121 4.79 3.77 4.79 3.77s-5.34.864-7.331.305c-2.91-.816-5.522-2.515-7.113-5.152-1.004-1.666-1.29-4.407-1.233-6.322.07-2.363.944-5.47 1.98-7.547.268-.538.755-1.213 1.24-1.559zM110.938 205.575c1.21-.863 3.187-1.521 4.68-1.653 1.528-.136 3.922-.242 5.1.815.751.674.96 2.234.926 3.23-.025.711-.43 1.614-.817 2.193-.817 1.22-2.96 1.963-3.582 3.302-.545 1.172-.517 3.075-.24 4.373.392 1.836.41 2.781 1.602 4.245.913 1.12 4.79 3.77 4.79 3.77s-5.341.863-7.332.305c-2.909-.817-5.521-2.515-7.112-5.153-1.005-1.665-1.291-4.406-1.234-6.321.07-2.364.944-5.47 1.98-7.548.268-.538.755-1.213 1.24-1.558z"
        fill={props.clawFill}
        fillRule="evenodd"
        strokeWidth={2.5}
      />
      <path
        d="M71.906 212.766s2.014-9.835 3.867-13.062a287.015 287.015 0 0 1 4.078-6.868M105.076 211.503s-.19-8.974-.908-12.905c-.388-2.125-2.244-5.13-2.244-5.13"
        fill="none"
        strokeWidth={2.5}
      />
    </g>
    <g>
      <path
        d="M280.416 212.225c1.398.502 3.066 1.751 4.027 2.904.981 1.178 2.433 3.084 2.236 4.654-.126 1.002-1.288 2.062-2.127 2.602-.598.385-1.57.567-2.267.578-1.469.025-3.3-1.312-4.755-1.06-1.273.22-2.821 1.327-3.73 2.295-1.284 1.368-2.052 1.921-2.575 3.735-.4 1.39-.367 6.084-.367 6.084s-3.753-3.895-4.43-5.85c-.987-2.855-1.08-5.97.18-8.78.796-1.775 2.886-3.572 4.492-4.617 1.982-1.289 5.032-2.342 7.33-2.675.595-.086 1.426-.07 1.986.13z"
        fill={props.clawFill}
        fillRule="evenodd"
        stroke={props.stroke}
        strokeWidth={2.5}
      />
      <path
        d="M193.089 77.874s10.076-.177 13.725-2.196c1.532-.847 3.821-2.64 3.843-4.392.015-1.286-1.516-2.915-2.745-3.293-1.146-.353-3.843 1.098-3.843 1.098s2.757-5.197 4.94-6.04c3.108-1.198 8.491-.565 10.98 1.648 1.404 1.247 2.819 5.894 2.803 7.771-.037 4.118-4.999 11.443-4.999 11.443s11.5 2.41 14.823-.549c1.618-1.44 2.425-5.424 1.098-7.137-1.014-1.308-5.49-.549-5.49-.549s4.79-3.53 7.137-3.294c3.048.307 6.668 3.407 8.235 6.04 1.87 3.142 3.332 8.832 1.647 12.077-2.478 4.772-15.92 8.235-15.92 8.235s8.355 1.141 11.528 2.745c2.503 1.265 4.359 5.653 7.137 6.039 1.97.273 5.32-.89 6.039-2.745.906-2.34-3.294-7.686-3.294-7.686s7.65 2.711 9.332 5.49c1.709 2.82 1.82 7.936.55 10.98-1.618 3.874-6.583 7.652-10.431 9.332-4.851 2.118-17.568 1.647-17.568 1.647s7.608 2.53 9.882 4.941c2.581 2.738 2.51 8.656 4.94 11.529 1.771 2.093 7.687 4.94 7.687 4.94s-9.634 1.04-13.725.55c-2.381-.285-7.686-2.196-7.686-2.196s5.045 5.723 7.137 8.235c2.024 2.43 4.083 6.302 6.588 8.234 2.568 1.982 6.69 3.812 9.881 4.392 2.76.502 9.333-.549 9.333-.549s-9.596 6.118-14.273 7.137c-4.67 1.018-15.921-.549-15.921-.549s6.209 10.582 9.882 14.274c1.418 1.425 3.555 3.295 5.49 3.843 2.698.764 9.332-.55 9.332-.55s-3.918 5.969-6.587 7.138c-4.527 1.981-12.037 2.182-16.47 0-2.423-1.194-5.49-7.137-5.49-7.137s4.622 8.623 4.392 12.627c-.305 5.294-7.686 15.92-7.686 15.92s-2.002-9.492-4.94-12.078c-1.92-1.688-8.236-2.196-8.236-2.196s-.119 7.159 1.098 9.882c1.714 3.834 9.333 10.431 9.333 10.431s-11.389.446-15.92-1.098c-7.87-2.682-23.058-15.372-23.058-15.372s-9.393 4.228-10.43 7.686c-1.038 3.459 2.03 8.48 3.842 10.431 1.812 1.95 6.04 2.745 6.04 2.745s-11.395 2.102-15.373 0c-3.977-2.102-7.24-7.75-8.234-12.078-.994-4.328 2.985-9.875 2.196-14.822-.79-4.948-1.943-12.145-3.184-16.47-1.24-4.325-3.192-5.528-6.15-11.529-2.956-6-24.155-22.508-24.155-22.508l29.097-65.879 31.84-6.588z"
        fill={props.mainFill}
        fillRule="evenodd"
        stroke={props.stroke}
        strokeWidth={3}
      />
      <path
        d="M108.437 83.359s-2.483-3.584-5.041-5.25c-1.56-1.017-6.68-2.304-9.264-2.813-2.423-.477-3.595.011-3.595.011s2.702 1.385 3.962 2.516c2.119 1.904 5.28 7.89 5.28 7.89s-3.03-1.829-4.483-2.191c-4.486-1.12-15.402-.533-15.402-.533s8.969 4.746 11.453 8.155c2.145 2.944.351 5.35.426 8.99.187 9.111-6.802 23.332-6.073 33.9.3 4.355 3.22 14.037 3.22 14.037s.194 10.94-2.575 16.094c-1.017 1.893-3.613 3.648-3.88 5.781-.474 3.78-1.472 6.623-1.526 9.894-.068 4.117 7.74 6.87 11.857 6.852 1.38-.006 3.048-1.333 4.425-1.25 2.3.14 4.78 2.936 7.084 2.963 2.719.031 12.35.435 14.214-1.544.946-1.005 4.802-3.719 7.603-7.86 1.648-2.435.957-5.323 2.256-8.059 2.46-5.178 6.31-9.813 6.31-9.813s-4.412 4.05-6.722 9.825c-2.69 6.73-3.323 15.485-3.074 17.995.368 3.702 8.656 5.326 11.647 7.538 1.936 1.432 6.367 3.367 8.592 2.445 2.572-1.067 1.862-5.306 4.585-5.889 1.543-.33 6.566 1.454 6.566 1.454s-1.919-7.124-4.014-9.34c-1.33-1.406-5.773-2.873-5.773-2.873s5.64-14.12 7.583-20.333c1.345-4.299 4.769-11.31 4.095-15.764-.527-3.488-3.466-7.068-6.53-8.815-1.131-.644-4.337-.062-4.337-.062s-.644-2.644.777-3.435c3.518-1.96 7.124-1.958 10.982-.803 6.783 2.03 16.467 6.094 21.573 11 2.995 2.878 6.662 7.48 8.922 11.963.918 1.822 1.604 3.624 1.918 5.282.764 4.042-1.08 9.722-.08 13.713.674 2.69 2.475 6.137 4.407 8.127 1.568 1.616 4.304 3.22 6.486 3.774 2.757.7 9.475-.286 9.475-.286l-6.16-4.582-1.865-13.774s1.583-16.87-.211-23.773c-1.98-7.618-4.215-8.509-4.215-8.509s8.17 4.198 12.504 13.825c1.356 3.01 2.315 10.757 2.315 10.757s3.213-13.125 2.37-18.724c-1-6.631-5.225-14.976-9.216-20.365-3.606-4.871-17.942-15.277-17.942-15.277s-16.343-.792-24.513-.038c-4.444.41-14.39 3.773-14.39 3.773s10.137-3.14 14.631-3.678c9.954-1.193 33.417.258 33.417.258s-12.423-9.044-18.385-11.742c-4.385-1.985-10.606-4.224-15.414-4.46-4.099-.201-13.45 2.497-13.45 2.497s9.585-2.298 13.776-2.333c4.766-.04 11.109 3.646 15.706 2.388 5.35-1.463 12.556-6.438 14.32-11.697.73-2.176-.272-9.343-1.47-11.3-1.618-2.645-5.913-6.627-8.952-7.236-2.006-.401-6.48 2.118-6.48 2.118s4.055 3.254 5.054 4.961c.866 1.48-.28 3.414-1.587 4.524-1.169.993-4.873-.399-6.388-.635-7.482-1.165-13.667-3.877-20.248-3.264-2.24.209-8.383 1.284-10.748 3.229-1.547 1.272-6.252 6.524-6.252 6.524s-1.302-4.932-2.594-6.634c-2.79-3.674-8.193-7.117-12.287-9.243-2.936-1.524-10.491-3.394-10.491-3.394s-2.823 9.823-3.52 14.138c-.403 2.489-.644 8.38-.644 8.38z"
        fill={props.mainFill}
        fillRule="evenodd"
        stroke={props.stroke}
        strokeWidth={3}
      />
      <path
        d="M120.541 136.195s2.533-1.97 3.006-3.104c.929-2.227 1.061-5.261-.446-7.145-.789-.985-1.888-1.384-3.15-1.349-1.355.038-5.729 1.737-7.25 2.958-2.192 1.759-11.437 6.735-12.72 7.02-1.153.258-3.782 2.43-3.154 3.47.303.5.877 1.896 1.393 2.172.782.417 1.905 1.092 2.79 1.103 1.107.013 4.236-.36 4.236-.36"
        fill={props.mainFill}
        fillRule="evenodd"
        stroke={props.stroke}
        strokeWidth={2.5}
      />
      <path
        d="M95.112 183.023s-4.658-6.61-4.85-9.015c-.193-2.405.188-3.16 1.078-3.334.89-.174 2.039.34 3.085 2.415 1.046 2.074.687 9.934.687 9.934z"
        fill="none"
        stroke={props.stroke}
        strokeWidth={2.5}
      />
      <path
        d="M119.279 87.303s-3.333-3.944-3.79-6.032c-.718-3.293 1.469-11.139 1.469-11.139s7.155.865 8.423 3.26c.627 1.182-1.614 3.154-1.005 4.346.8 1.567 4.619.706 5.402 2.282.527 1.06-.97 3.824-.97 3.824s-4.746-1.593-6.554-.785c-1.42.634-2.975 4.244-2.975 4.244z"
        fillRule="evenodd"
        stroke={props.stroke}
        strokeWidth={2.5}
      />
      <path
        d="M119.458 95.14s8.832 8.613 11.23 13.235c1.267 2.44 2.328 6.121 2.302 8.87-.05 5.275-3.238 18.039-3.238 18.039l.74 1.097s.907-15.214 5.841-18.054c1.836-1.058 5.336.068 6.903 1.494 1.342 1.22 2.908 3.859 3.32 5.625.642 2.755.36 9.394.36 9.394M171.655 116.458s8.302 1.82 11.368 3.677c4.839 2.932 8.62 6.71 12.401 10.918 1.525 1.697 4.72 5.96 4.72 5.96M118.226 164.362s.539-3.705 3.84-8.26c1.21-1.669 3.364-4.37 5.24-5.82 2.144-1.655 5.84-2.392 7.92-2.339 2.943.075 6.385 3.597 8.38 6.247 1.057 1.405 2.085 3.805 2.333 5.69.304 2.303-.919 7.692-.919 7.692"
        fill="none"
        stroke={props.stroke}
        strokeWidth={2.5}
      />
    </g>
    <path
      d="M96.957 124.58s-1.626 2.273-2.099 3.407c-.929 2.227-1.061 5.261.446 7.145.789.985 1.888 1.384 3.15 1.349 1.355-.038 5.729-1.737 7.25-2.959 2.192-1.758 11.437-6.734 12.72-7.02 1.153-.257 2.752-1.288 3.111-2.414.37-1.157-.538-2.837-1.166-3.877-.303-.5-.877-1.09-1.393-1.366-.782-.416-2.006-.588-2.891-.598-1.107-.014-3.63.662-3.63.662"
      fill={props.mainFill}
      fillRule="evenodd"
      stroke={props.stroke}
      strokeWidth={2.5}
    />
  </svg>
);

export default SvgLionDormant;
