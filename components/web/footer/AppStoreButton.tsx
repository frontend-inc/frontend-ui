import React from 'react'
import Link from 'next/link'

type AppStoreButtonProps = {
  url: string
}

const AppStoreButton: React.FC<AppStoreButtonProps> = (props) => {

  const { url='' } = props || {}

  return(
    <Link href={url} target="_blank" rel="noreferrer">
      <svg width="135" height="40" viewBox="0 0 135 40" fill="#000000" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="119" height="39" rx="6.5" fill="#0C0D10"/>
      <rect x="0.5" y="0.5" width="119" height="39" rx="6.5" stroke="#A6A6A6"/>
      <path d="M81.5259 19.2009V21.4919H80.0898V22.9944H81.5259V28.0994C81.5259 29.8425 82.3145 30.5398 84.2983 30.5398C84.647 30.5398 84.979 30.4983 85.2695 30.4485V28.9626C85.0205 28.9875 84.8628 29.0042 84.5889 29.0042C83.7007 29.0042 83.3106 28.5891 83.3106 27.6428V22.9944H85.2695V21.4919H83.3106V19.2009H81.5259Z" fill="white"/>
      <path d="M90.3234 30.6643C92.963 30.6643 94.5817 28.8962 94.5817 25.9661C94.5817 23.0525 92.9547 21.2761 90.3234 21.2761C87.6837 21.2761 86.0568 23.0525 86.0568 25.9661C86.0568 28.8962 87.6754 30.6643 90.3234 30.6643ZM90.3234 29.0789C88.7711 29.0789 87.8996 27.9417 87.8996 25.9661C87.8996 24.0071 88.7711 22.8616 90.3234 22.8616C91.8673 22.8616 92.7472 24.0071 92.7472 25.9661C92.7472 27.9334 91.8673 29.0789 90.3234 29.0789Z" fill="white"/>
      <path d="M95.9666 30.49H97.7513V25.1526C97.7513 23.8826 98.7058 23.0276 100.059 23.0276C100.374 23.0276 100.906 23.0857 101.055 23.1355V21.3757C100.864 21.3259 100.524 21.301 100.258 21.301C99.0794 21.301 98.075 21.9485 97.8177 22.8367H97.6848V21.4504H95.9666V30.49Z" fill="white"/>
      <path d="M105.486 22.7952C106.806 22.7952 107.669 23.7166 107.711 25.136H103.145C103.245 23.7249 104.166 22.7952 105.486 22.7952ZM107.703 28.0496C107.371 28.7551 106.632 29.1453 105.553 29.1453C104.125 29.1453 103.204 28.1409 103.145 26.5554V26.4558H109.529V25.8333C109.529 22.9944 108.01 21.2761 105.495 21.2761C102.946 21.2761 101.328 23.1106 101.328 25.9993C101.328 28.8879 102.913 30.6643 105.503 30.6643C107.57 30.6643 109.014 29.6682 109.421 28.0496H107.703Z" fill="white"/>
      <path d="M69.8223 27.1518C69.96 29.3715 71.8097 30.7911 74.5628 30.7911C77.5052 30.7911 79.3464 29.3027 79.3464 26.9281C79.3464 25.0612 78.2968 24.0288 75.7501 23.4351L74.3822 23.0996C72.7647 22.721 72.1108 22.2134 72.1108 21.3272C72.1108 20.2088 73.126 19.4775 74.6489 19.4775C76.0943 19.4775 77.0923 20.1916 77.2729 21.3359H79.1485C79.0367 19.2452 77.1955 17.774 74.6747 17.774C71.9646 17.774 70.1578 19.2452 70.1578 21.4563C70.1578 23.2802 71.1817 24.3643 73.4272 24.8891L75.0274 25.2763C76.6707 25.6634 77.3934 26.2313 77.3934 27.1776C77.3934 28.2789 76.2577 29.079 74.7091 29.079C73.0486 29.079 71.8957 28.3305 71.7323 27.1518H69.8223Z" fill="white"/>
      <path d="M51.335 21.301C50.1064 21.301 49.0439 21.9153 48.4961 22.9446H48.3633V21.4504H46.645V33.4949H48.4297V29.1204H48.5708C49.0439 30.075 50.0649 30.6394 51.3516 30.6394C53.6343 30.6394 55.0869 28.8381 55.0869 25.9661C55.0869 23.094 53.6343 21.301 51.335 21.301ZM50.8286 29.0374C49.3345 29.0374 48.3965 27.8586 48.3965 25.9744C48.3965 24.0818 49.3345 22.9031 50.8369 22.9031C52.3477 22.9031 53.2524 24.0569 53.2524 25.9661C53.2524 27.8835 52.3477 29.0374 50.8286 29.0374Z" fill="white"/>
      <path d="M61.3318 21.301C60.1032 21.301 59.0407 21.9153 58.4929 22.9446H58.3601V21.4504H56.6418V33.4949H58.4265V29.1204H58.5676C59.0407 30.075 60.0617 30.6394 61.3484 30.6394C63.6311 30.6394 65.0837 28.8381 65.0837 25.9661C65.0837 23.094 63.6311 21.301 61.3318 21.301ZM60.8254 29.0374C59.3313 29.0374 58.3933 27.8586 58.3933 25.9744C58.3933 24.0818 59.3313 22.9031 60.8337 22.9031C62.3445 22.9031 63.2492 24.0569 63.2492 25.9661C63.2492 27.8835 62.3445 29.0374 60.8254 29.0374Z" fill="white"/>
      <path d="M43.443 30.49H45.4907L41.0082 18.0751H38.9348L34.4523 30.49H36.4312L37.5754 27.1948H42.3074L43.443 30.49ZM39.8726 20.3292H40.0188L41.817 25.5774H38.0658L39.8726 20.3292Z" fill="white"/>
      <path d="M35.6511 8.71094V14.7H37.8135C39.5981 14.7 40.6316 13.6001 40.6316 11.6868C40.6316 9.80249 39.5898 8.71094 37.8135 8.71094H35.6511ZM36.5808 9.55762H37.7097C38.9507 9.55762 39.6853 10.3462 39.6853 11.6992C39.6853 13.073 38.9631 13.8533 37.7097 13.8533H36.5808V9.55762Z" fill="white"/>
      <path d="M43.7967 14.7871C45.1165 14.7871 45.9258 13.9031 45.9258 12.438C45.9258 10.9812 45.1124 10.093 43.7967 10.093C42.4769 10.093 41.6634 10.9812 41.6634 12.438C41.6634 13.9031 42.4727 14.7871 43.7967 14.7871ZM43.7967 13.9944C43.0206 13.9944 42.5848 13.4258 42.5848 12.438C42.5848 11.4585 43.0206 10.8857 43.7967 10.8857C44.5687 10.8857 45.0086 11.4585 45.0086 12.438C45.0086 13.4216 44.5687 13.9944 43.7967 13.9944Z" fill="white"/>
      <path d="M52.818 10.1802H51.9256L51.1205 13.6292H51.0499L50.1202 10.1802H49.2652L48.3355 13.6292H48.2691L47.4598 10.1802H46.555L47.8001 14.7H48.7174L49.6471 11.3713H49.7176L50.6515 14.7H51.577L52.818 10.1802Z" fill="white"/>
      <path d="M53.8456 14.7H54.7379V12.0562C54.7379 11.3506 55.1571 10.9106 55.817 10.9106C56.477 10.9106 56.7924 11.2717 56.7924 11.998V14.7H57.6847V11.7739C57.6847 10.699 57.1286 10.093 56.12 10.093C55.4394 10.093 54.9911 10.396 54.7711 10.8982H54.7047V10.1802H53.8456V14.7Z" fill="white"/>
      <path d="M59.09 14.7H59.9824V8.41626H59.09V14.7Z" fill="white"/>
      <path d="M63.3384 14.7871C64.6582 14.7871 65.4675 13.9031 65.4675 12.438C65.4675 10.9812 64.6541 10.093 63.3384 10.093C62.0186 10.093 61.2051 10.9812 61.2051 12.438C61.2051 13.9031 62.0144 14.7871 63.3384 14.7871ZM63.3384 13.9944C62.5623 13.9944 62.1265 13.4258 62.1265 12.438C62.1265 11.4585 62.5623 10.8857 63.3384 10.8857C64.1104 10.8857 64.5503 11.4585 64.5503 12.438C64.5503 13.4216 64.1104 13.9944 63.3384 13.9944Z" fill="white"/>
      <path d="M68.1263 14.0234C67.6407 14.0234 67.2879 13.7869 67.2879 13.3801C67.2879 12.9817 67.5701 12.77 68.1927 12.7285L69.2967 12.658V13.0356C69.2967 13.5959 68.7986 14.0234 68.1263 14.0234ZM67.898 14.7747C68.4915 14.7747 68.9854 14.5173 69.2552 14.0649H69.3257V14.7H70.1849V11.6121C70.1849 10.6575 69.5457 10.093 68.4126 10.093C67.3875 10.093 66.657 10.5911 66.5657 11.3672H67.429C67.5286 11.0476 67.8731 10.865 68.3711 10.865C68.9812 10.865 69.2967 11.1348 69.2967 11.6121V12.0022L68.0723 12.0728C66.9974 12.1392 66.3914 12.6082 66.3914 13.4216C66.3914 14.2476 67.0264 14.7747 67.898 14.7747Z" fill="white"/>
      <path d="M73.213 14.7747C73.8355 14.7747 74.3626 14.48 74.6324 13.9861H74.703V14.7H75.558V8.41626H74.6656V10.8982H74.5992C74.3543 10.4001 73.8314 10.1055 73.213 10.1055C72.0716 10.1055 71.337 11.0103 71.337 12.438C71.337 13.8699 72.0633 14.7747 73.213 14.7747ZM73.4662 10.9065C74.2132 10.9065 74.6822 11.5 74.6822 12.4421C74.6822 13.3884 74.2174 13.9736 73.4662 13.9736C72.7108 13.9736 72.2584 13.3967 72.2584 12.438C72.2584 11.4875 72.7149 10.9065 73.4662 10.9065Z" fill="white"/>
      <path d="M81.3444 14.7871C82.6643 14.7871 83.4736 13.9031 83.4736 12.438C83.4736 10.9812 82.6601 10.093 81.3444 10.093C80.0246 10.093 79.2111 10.9812 79.2111 12.438C79.2111 13.9031 80.0205 14.7871 81.3444 14.7871ZM81.3444 13.9944C80.5683 13.9944 80.1325 13.4258 80.1325 12.438C80.1325 11.4585 80.5683 10.8857 81.3444 10.8857C82.1164 10.8857 82.5563 11.4585 82.5563 12.438C82.5563 13.4216 82.1164 13.9944 81.3444 13.9944Z" fill="white"/>
      <path d="M84.6548 14.7H85.5471V12.0562C85.5471 11.3506 85.9663 10.9106 86.6262 10.9106C87.2861 10.9106 87.6016 11.2717 87.6016 11.998V14.7H88.4939V11.7739C88.4939 10.699 87.9377 10.093 86.9292 10.093C86.2485 10.093 85.8003 10.396 85.5803 10.8982H85.5139V10.1802H84.6548V14.7Z" fill="white"/>
      <path d="M92.6036 9.05542V10.2009H91.8856V10.9521H92.6036V13.5046C92.6036 14.3762 92.9979 14.7249 93.9898 14.7249C94.1642 14.7249 94.3302 14.7041 94.4754 14.6792V13.9363C94.3509 13.9487 94.2721 13.957 94.1351 13.957C93.691 13.957 93.4959 13.7495 93.4959 13.2764V10.9521H94.4754V10.2009H93.4959V9.05542H92.6036Z" fill="white"/>
      <path d="M95.6732 14.7H96.5656V12.0603C96.5656 11.3755 96.9723 10.9148 97.7028 10.9148C98.3336 10.9148 98.6698 11.28 98.6698 12.0022V14.7H99.5622V11.7822C99.5622 10.7073 98.9687 10.0972 98.0058 10.0972C97.3251 10.0972 96.8478 10.4001 96.6278 10.9065H96.5573V8.41626H95.6732V14.7Z" fill="white"/>
      <path d="M102.781 10.8525C103.441 10.8525 103.873 11.3132 103.894 12.0229H101.611C101.661 11.3174 102.121 10.8525 102.781 10.8525ZM103.889 13.4797C103.723 13.8325 103.354 14.0276 102.814 14.0276C102.101 14.0276 101.64 13.5254 101.611 12.7327V12.6829H104.802V12.3716C104.802 10.9521 104.043 10.093 102.785 10.093C101.511 10.093 100.702 11.0103 100.702 12.4546C100.702 13.8989 101.495 14.7871 102.789 14.7871C103.823 14.7871 104.545 14.2891 104.748 13.4797H103.889Z" fill="white"/>
      <path d="M24.769 20.3008C24.7907 18.6198 25.6934 17.0292 27.1256 16.1488C26.2221 14.8584 24.7088 14.0403 23.1344 13.9911C21.4552 13.8148 19.8272 14.9959 18.9715 14.9959C18.0992 14.9959 16.7817 14.0086 15.363 14.0378C13.5137 14.0975 11.7898 15.1489 10.8901 16.7656C8.95607 20.1141 10.3987 25.0351 12.2513 27.7417C13.1782 29.0671 14.2615 30.5475 15.6789 30.495C17.066 30.4375 17.584 29.6105 19.2583 29.6105C20.9171 29.6105 21.4031 30.495 22.8493 30.4616C24.3377 30.4375 25.2754 29.1304 26.1698 27.7925C26.8358 26.8481 27.3483 25.8044 27.6882 24.7C25.9391 23.9602 24.771 22.2 24.769 20.3008Z" fill="white"/>
      <path d="M22.0373 12.2111C22.8489 11.2369 23.2487 9.98469 23.1518 8.72046C21.912 8.85068 20.7668 9.44324 19.9443 10.3801C19.14 11.2954 18.7214 12.5255 18.8006 13.7415C20.0408 13.7542 21.2601 13.1777 22.0373 12.2111Z" fill="white"/>
      </svg>
    </Link>
  )
}

export default AppStoreButton;