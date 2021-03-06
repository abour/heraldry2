import React from 'react';

type Props = {
  tongueFill: string;
  mainFill: string;
  stroke: string;
  onClick: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  strokeWidth: number;
};
export const DefaultLionHead = (props: Props) => {
  return (
    <g>
      <path
        d="M190.604 84.25s-9.525-5.762-14.23-6.35c-3.345-.417-7.95-.439-11.257.157-4.75.855-11.746 6.107-16.543 6.73-2.259.293-4.149.561-5.767-.854-2.895-2.532-.681-7.536-2.467-10.76-.873-1.578-3.05-3.212-4.807-4.048-2.176-1.035-5.576-1.893-8.034-1.644-1.53.155-4.602 1.996-4.602 1.996s4.049 2.005 5.04 3.444c2.174 3.157.538 8.823 2.478 12.095.765 1.289 2.596 2.532 3.892 3.44 1.33.931 3.178 2.222 4.813 2.637 3.642.924 8.929.745 12.634.05 4.522-.848 9.518-5.867 14.04-6.715 3.436-.644 8.254.62 11.71 1.179 2.531.409 8.03 2.65 8.03 2.65l5.07-4.008z"
        fill={props.tongueFill}
        fillRule="evenodd"
        stroke={props.stroke}
        onClick={props.onClick}
        style={{ cursor: 'pointer' }}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        strokeWidth={props.strokeWidth}
      />
      <path
        d="M157.575 65.308c.458-1.458.872-.975 2.315-1.48 1.454-.508 1.427-.784 2.578.24 1.042.927 1.335.578 1.493 1.964.41 3.577-.05 7.16-1.432 10.485-.586 1.411-2.185 3.23-2.185 3.23s-1.16-1.383-1.69-3.08c-1.118-3.59-2.205-7.772-1.079-11.359zM159.365 92.773c-.048 1.528.501 1.208 1.698 2.16 1.205.958 1.088 1.21 2.512.623 1.29-.531 1.45-.106 2.058-1.362 1.565-3.242 2.311-6.777 2.103-10.371-.089-1.526-.999-3.77-.999-3.77s-1.55.923-2.61 2.352c-2.24 3.02-4.644 6.61-4.762 10.368z"
        fill="#FFF"
        fillRule="evenodd"
        stroke={props.stroke}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        strokeWidth={props.strokeWidth}
        onClick={props.onClick}
        style={{ cursor: 'pointer' }}
      />
      <path
        d="M207.294 87.896s-14.609 15.065-22.13 19.862c-7.136 4.552-18.821 6.52-25.943 11.096-7.19 4.62-15.903 12.363-21.077 19.165-3.553 4.672-6.619 12.024-8.82 17.465-2.017 4.988 2.794 11.951.724 12.575-2.73.824-7.638 4.301-10.828 9.724-2.234 3.799-3.228 9.67-3.733 11.471-.69 2.46-.228 6.41 1.366 8.406 1.764 2.21 8.736 3.535 8.736 3.535s-3.092-5.381-2.42-7.71c.538-1.86 3.037-3.718 4.917-4.18 2.82-.693 6.35.5 6.35.5s-2.684 8.394-1.797 11.892c.682 2.687 4.642 4.76 5.57 7.372.88 2.475 1.053 6.23.316 8.751-1.251 4.277-8.45 12.216-8.45 12.216s11.114-3.37 14.727-6.59c3.092-2.756 6.214-7.815 7.048-11.872.789-3.84-2.94-9.238-1.699-12.957 1.575-4.72 11.598-11.854 11.598-11.854s.446 8.67 1.35 12.256c.611 2.42 3.703 5.285 3.12 7.712-.782 3.256-6.94 4.318-8.43 7.316-1.497 3.015-1.305 7.878-.744 11.197.4 2.366 1.528 5.569 3.12 7.363 2.404 2.707 6.98 5.055 10.476 5.992 1.217.326 4.2.016 4.2.016s-7.092-4.562-8.369-7.733c-.707-1.756-.432-4.586.375-6.298.982-2.083 3.856-3.749 5.621-5.228 2.527-2.118 6.68-4.07 8.777-6.615 2.15-2.609 4.077-6.86 4.94-10.13.914-3.457.748-11.897.748-11.897s-.299 6.446 1.396 9.467c1.017 1.813 5.102 4.923 6.24 6.664.927 1.42 2.249 3.57 2.078 5.258-.214 2.115-2.767 4.119-3.874 5.934-1.003 1.646-3.172 5.588-3.172 5.588s9.42-4.324 12.63-7.3c2.882-2.673 6.715-6.947 7.392-10.82.356-2.032-1.097-4.691-1.723-6.657-.444-1.394-1.31-3.157-1.732-4.557-.404-1.341-1.465-3.222-1.031-4.554.736-2.264 5.97-5.226 5.97-5.226s-1.296 4.392-1.075 6.296c.37 3.177 4.16 9.816 4.16 9.816s.466-5.972 2.132-7.691c2.911-3.005 9.65-2.129 13.316-4.147 4.24-2.334 11.446-9.549 14.44-13.352.647-.821 6.407 6.757 10.02 4.007 5.778-4.4 10.134-9.767 14.482-18.434 3.35-6.678-.786-16.255-.453-24.886.36-9.341 3.16-21.112 2.907-21.948-1.473-4.853-7.455-10.65-7.455-10.65l-1.659-22.757-11.495-13.696-49.403 13.452 6.27 7.375z"
        fill={props.mainFill}
        fillRule="evenodd"
        stroke={props.stroke}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        strokeWidth={props.strokeWidth}
        onClick={props.onClick}
        style={{ cursor: 'pointer' }}
      />
      <path
        d="M248.676 33.593s2.659-3.455 3.47-6.399c.493-1.794.163-7.063-.137-9.68-.282-2.453-1.104-3.422-1.104-3.422s-.497 2.996-1.193 4.54c-1.169 2.597-5.912 7.428-5.912 7.428s.822-3.443.726-4.937c-.297-4.614-4.175-14.835-4.175-14.835s-1.795 9.987-4.287 13.39c-2.153 2.938-4.99 1.961-8.436 3.14-8.622 2.947-24.295.611-34.142 4.52-4.056 1.61-12.393 7.334-12.393 7.334s-10.363 3.51-16.115 2.44c-2.113-.394-4.574-2.334-6.687-1.94-3.745.698-6.756.611-9.89 1.554-3.942 1.187-4.191 9.462-2.923 13.379.425 1.312 2.196 2.499 2.536 3.836.566 2.233-1.343 5.446-.669 7.649.797 2.6 3.259 5.863 5.711 7.037 3.364 1.61 8.58.274 12.119-.908 3.882-1.297 8.079-.933 10.22-4.423.863-1.407 3.533-6.68 3.533-6.68s6.194 4.517 7.619 8.319c1.242 3.315 1.15 8.596-.366 11.795-2.236 4.715-8.246 9.555-13.118 11.425-4.376 1.68-11.32-1.604-15.623.256-3.415 1.476-6.797 2.822-7.996 6.344-.775 2.28-1.272 7.09.284 8.928 1.798 2.127 5.62.162 7.003 2.579.784 1.369.611 6.698.611 6.698s6.204-3.995 7.678-6.665c.935-1.693.982-6.372.982-6.372s15.166 1.08 21.676 1.043c4.504-.026 12.225 1.104 16.263-.892 3.162-1.562 5.68-5.45 6.412-8.9.27-1.273-1.259-4.15-1.259-4.15s2.323-1.418 3.509-.305c2.936 2.756 4.03 6.192 4.103 10.218.129 7.08-.8 17.541-3.921 23.896-1.831 3.728-5.101 8.621-8.685 12.137-1.456 1.428-2.964 2.63-4.449 3.433-3.618 1.957-9.59 1.926-13.088 4.092-2.358 1.46-5.094 4.224-6.403 6.67-1.062 1.984-1.76 5.079-1.623 7.326.172 2.838 3.152 8.94 3.152 8.94l2.494-7.262 12.554-5.964s16.553-3.62 22.584-7.428c6.655-4.201 6.825-6.602 6.825-6.602s-1.516 9.058-9.37 16.115c-2.455 2.206-9.544 5.475-9.544 5.475s13.48-.929 18.558-3.434c6.014-2.968 12.679-9.53 16.6-14.97 3.544-4.917 9.1-21.738 9.1-21.738s-4.214-15.81-7.416-23.364c-1.742-4.11-7.969-12.562-7.969-12.562s6.073 8.703 7.952 12.82c4.163 9.12 9.913 31.914 9.913 31.914s4.839-14.584 5.597-21.084c.558-4.781.8-11.388-.437-16.04-1.054-3.967-6.467-12.055-6.467-12.055s5.103 8.432 6.41 12.415c1.487 4.528-.096 11.691 2.5 15.688 3.02 4.653 9.95 10.005 15.496 10.086 2.295.034 5.03-2.247 6.532-3.983 2.027-2.345 4.391-6.426 4.048-9.507-.227-2.032-3.988-5.53-3.988-5.53s-1.867 4.853-3.19 6.324c-1.146 1.274-3.337.77-4.792-.137-1.3-.812-1.101-4.764-1.337-6.279-1.165-7.482 3.45-16.272.865-22.354-.88-2.072-3.771-7.596-6.343-9.258-1.682-1.087-8.116-3.973-8.116-3.973s4.303-2.74 5.531-4.488c2.652-3.774 4.29-9.97 5.07-14.515.56-3.26.045-11.027.045-11.027s-10.216.298-14.54.945c-2.493.373-8.178 1.934-8.178 1.934z"
        fill={props.mainFill}
        fillRule="evenodd"
        stroke={props.stroke}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        strokeWidth={props.strokeWidth}
        onClick={props.onClick}
        style={{ cursor: 'pointer' }}
      />
      <g fillRule="evenodd" className="lion-eyes">
        <path
          style={{
            marker: 'none',
            cursor: 'pointer',
          }}
          d="M193.183 43.513a7.36 12.505-66.1 1 0 22.865 10.132 7.36 12.505-66.1 1 0-22.865-10.132z"
          fill="#FFF"
          stroke={props.stroke}
          onMouseDown={props.onMouseDown}
          onMouseUp={props.onMouseUp}
          strokeWidth={props.strokeWidth}
          overflow="visible"
          onClick={props.onClick}
        />
        <path
          style={{
            marker: 'none',
            cursor: 'pointer',
          }}
          d="M209.318 45.927a8.007 8.007 0 1 1-16.014-.064 8.007 8.007 0 1 1 16.014.064z"
          fill="#FFF"
          stroke={props.stroke}
          onMouseDown={props.onMouseDown}
          onMouseUp={props.onMouseUp}
          strokeWidth={props.strokeWidth}
          overflow="visible"
          onClick={props.onClick}
        />
        <path
          d="M201.997 39.009c-.604-.005-1.146.087-1.688.149-1.085.123-2.001.305-2.001.305l.767 3.409s.747-.144 1.626-.244c.88-.1 1.981.053 1.813-.024-.076-.034.63.762.684.94.174.573.063 2.708-.226 3.285-.102.203-.922.917-.973.934.26-.084-.603-.013-1.25-.13-.645-.118-1.186-.255-1.186-.255s-1.77-.218-2.023.36c-.336.766 1.005 2.6 1.005 2.6s.696.168 1.53.32c.834.15 1.685.416 2.938.011 1.494-.483 2.417-1.426 3.042-2.675.839-1.677 1.05-3.628.49-5.467-.397-1.306-1.092-2.428-2.58-3.104a4.7 4.7 0 0 0-1.968-.414z"
          onClick={props.onClick}
          style={{ cursor: 'pointer' }}
        />
        <path
          d="M200.567 33.635s-2.763.42-3.905.871c-2.244.887-4.511 2.908-4.81 5.302-.157 1.252.324 2.318 1.228 3.197.973.946 2.544.836 3.899.903 1.984.098 4.453-1.455 6.39-1.216 2.789.344 6.4 2.068 8.498 3.936.982.874 1.192 3.014 2.291 3.734.988.648 2.843 1.075 3.9.548 1.087-.542 1.658-2.365 1.965-3.54.148-.566.17-1.389.008-1.95-.246-.852-.976-1.848-1.586-2.49-.763-.803-3.007-2.14-3.007-2.14"
          fill={props.mainFill}
          stroke={props.stroke}
          onMouseDown={props.onMouseDown}
          onMouseUp={props.onMouseUp}
          strokeWidth={props.strokeWidth}
          onClick={props.onClick}
          style={{ cursor: 'pointer' }}
        />
      </g>
      <path
        d="M149.678 51.196s4.88-6.447 7.113-7.361c2.233-.915 3.068-.781 3.504.014.437.795.296 2.045-1.362 3.672-1.658 1.627-9.255 3.675-9.255 3.675z"
        fill="none"
        stroke={props.stroke}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        strokeWidth={props.strokeWidth}
        onClick={props.onClick}
        style={{ cursor: 'pointer' }}
      />
      <path
        d="M248.214 45.12s2.744-4.374 4.595-5.443c2.918-1.686 11.058-1.988 11.058-1.988s1.351 7.08-.544 9.016c-.937.957-3.496-.579-4.447.363-1.25 1.239.731 4.616-.532 5.841-.85.824-3.938.238-3.938.238s.075-5.005-1.244-6.482c-1.036-1.16-4.948-1.544-4.948-1.544z"
        fillRule="evenodd"
        stroke={props.stroke}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        strokeWidth={props.strokeWidth}
        onClick={props.onClick}
        style={{ cursor: 'pointer' }}
      />
      <path
        d="M240.803 47.674s-5.521 11.032-9.195 14.722c-1.94 1.948-5.124 4.078-7.75 4.889-5.041 1.555-18.17 2.399-18.17 2.399l-.82 1.039s14.77-3.761 18.975.076c1.566 1.428 1.557 5.104.675 7.03-.755 1.65-2.792 3.944-4.35 4.873-2.429 1.45-8.84 3.199-8.84 3.199M236.362 103.881s.79 8.463-.048 11.948c-1.322 5.5-3.772 10.251-6.632 15.133-1.152 1.968-4.242 6.309-4.242 6.309M147.521 175.213s-6.351 4.235-8.661 6.773c-1.709 1.878-4.288 7.534-4.288 7.534M212.924 164.932s-12.246 3.833-17.324 7.264c-2.35 1.588-4.473 4.964-5.7 7.522-1.914 3.998-3.085 11.436-3.085 11.436M211.485 184s6.973-6.8 9.834-9.195c3.857-3.228 11.253-4.929 14.092-9.08 1.821-2.662 2.151-10.533 2.151-10.533M146.26 139.364s-.581 9.61-2.163 13.345c-.785 1.854-2.679 5.153-4.7 7.444-4.031 4.572-8.913 7.999-8.913 7.999M161.302 188.944s2.258-8.931 4.135-12.624c1.222-2.407 5.65-7.006 5.65-7.006"
        fill="none"
        stroke={props.stroke}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        strokeWidth={props.strokeWidth}
        onClick={props.onClick}
        style={{ cursor: 'pointer' }}
      />
    </g>
  );
};
