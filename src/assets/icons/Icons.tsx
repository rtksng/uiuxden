import React from 'react';

type IconName = 'humani' | 'uidesign' | 'uistrategy' | 'productbranding' | 'sustainable' | 'designsprint' | 'uxaudit' | 'uxconsult' | 'accessiblity';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    color?: string;
}
const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
    const iconMap: Record<IconName, (className: string) => JSX.Element> = {
        humani: (className) => (
            <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_937_1383)">
                    <path d="M18.4175 4.33328C18.4175 6.12511 19.8757 7.58328 21.6675 7.58328C22.2828 7.58328 22.8527 7.40128 23.3434 7.10336C24.1115 8.44778 24.6152 9.90269 24.8167 11.4443L25.8914 11.3045C25.6617 9.54736 25.0811 7.89094 24.1765 6.37211C24.6326 5.81311 24.9164 5.10894 24.9164 4.33219C24.9164 2.54036 23.4582 1.08219 21.6664 1.08219C20.8853 1.08219 20.1768 1.37036 19.6157 1.83186C18.1066 0.939193 16.4285 0.334693 14.6952 0.108276L14.5554 1.18186C16.0786 1.38011 17.5552 1.89686 18.8942 2.65953C18.5973 3.14919 18.4164 3.71794 18.4164 4.33111L18.4175 4.33328ZM23.8342 4.33328C23.8342 5.52819 22.8624 6.49994 21.6675 6.49994C20.4726 6.49994 19.5008 5.52819 19.5008 4.33328C19.5008 3.13836 20.4726 2.16661 21.6675 2.16661C22.8624 2.16661 23.8342 3.13836 23.8342 4.33328ZM7.58416 21.6666C7.58416 19.8748 6.12599 18.4166 4.33416 18.4166C3.71883 18.4166 3.14899 18.5986 2.65824 18.8965C1.88908 17.551 1.38533 16.0961 1.18491 14.5556L0.111328 14.6954C0.339911 16.4504 0.920578 18.1068 1.82516 19.6278C1.37016 20.1868 1.08524 20.8909 1.08524 21.6666C1.08524 23.4584 2.54341 24.9166 4.33524 24.9166C5.11091 24.9166 5.81508 24.6317 6.37408 24.1767C7.89508 25.0802 9.55149 25.6619 11.3065 25.8905L11.4462 24.8169C9.90574 24.6165 8.45083 24.1128 7.10533 23.3436C7.40324 22.8529 7.58524 22.283 7.58524 21.6677L7.58416 21.6666ZM4.33416 23.8333C3.13924 23.8333 2.16749 22.8615 2.16749 21.6666C2.16749 20.4717 3.13924 19.4999 4.33416 19.4999C5.52908 19.4999 6.50083 20.4717 6.50083 21.6666C6.50083 22.8615 5.52908 23.8333 4.33416 23.8333ZM1.18491 11.4443C1.38533 9.90378 1.88908 8.44886 2.65824 7.10336C3.14899 7.40128 3.71883 7.58328 4.33416 7.58328C6.12599 7.58328 7.58416 6.12511 7.58416 4.33328C7.58416 3.71794 7.40216 3.14811 7.10424 2.65736C8.44974 1.88819 9.90466 1.38444 11.4452 1.18403L11.3054 0.110443C9.55041 0.339026 7.89399 0.919693 6.37299 1.82319C5.81399 1.36819 5.10983 1.08328 4.33416 1.08328C2.54233 1.08328 1.08416 2.54144 1.08416 4.33328C1.08416 5.10894 1.36908 5.81311 1.82408 6.37211C0.920578 7.89311 0.338828 9.54953 0.111328 11.3056L1.18491 11.4443ZM4.33416 2.16661C5.52908 2.16661 6.50083 3.13836 6.50083 4.33328C6.50083 5.52819 5.52908 6.49994 4.33416 6.49994C3.13924 6.49994 2.16749 5.52819 2.16749 4.33328C2.16749 3.13836 3.13924 2.16661 4.33416 2.16661ZM24.8167 14.5556C24.6152 16.0972 24.1126 17.5521 23.3434 18.8965C22.8527 18.5986 22.2828 18.4166 21.6675 18.4166C19.8757 18.4166 18.4175 19.8748 18.4175 21.6666C18.4175 22.2819 18.5995 22.8518 18.8974 23.3425C17.5519 24.1117 16.097 24.6154 14.5565 24.8159L14.6962 25.8894C16.4523 25.6609 18.1087 25.0802 19.6287 24.1756C20.1877 24.6317 20.8918 24.9155 21.6686 24.9155C23.4604 24.9155 24.9186 23.4574 24.9186 21.6655C24.9186 20.8899 24.6337 20.1868 24.1787 19.6267C25.0822 18.1068 25.6628 16.4504 25.8925 14.6932L24.8178 14.5534L24.8167 14.5556ZM21.6675 23.8333C20.4726 23.8333 19.5008 22.8615 19.5008 21.6666C19.5008 20.4717 20.4726 19.4999 21.6675 19.4999C22.8624 19.4999 23.8342 20.4717 23.8342 21.6666C23.8342 22.8615 22.8624 23.8333 21.6675 23.8333ZM19.5008 11.2536C19.5008 9.19636 17.9538 7.58328 15.98 7.58328C14.6952 7.58328 13.614 8.15528 13.0008 9.05228C12.3877 8.15528 11.3054 7.58328 10.0217 7.58328C8.04783 7.58328 6.50083 9.19528 6.50083 11.2536C6.65683 15.1915 12.4927 18.9908 13.0008 19.3548C13.5057 18.9929 19.347 15.1883 19.5008 11.2536ZM13.0008 18.0418C11.2447 16.7905 7.58416 13.6792 7.58416 11.2536C7.58416 9.77919 8.63174 8.66661 10.0217 8.66661C11.4343 8.66661 12.4592 9.57769 12.4592 10.8333H13.5425C13.5425 9.57769 14.5673 8.66661 15.98 8.66661C17.3688 8.66661 18.4175 9.77811 18.4175 11.2536C18.4175 13.6792 14.7558 16.7905 13.0008 18.0418Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_937_1383">
                        <rect width="26" height="26" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        uidesign: (className) => (
            <svg className={className} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4167 12.5417V20.125C18.4167 20.424 18.174 20.6667 17.875 20.6667C17.576 20.6667 17.3333 20.424 17.3333 20.125V12.5417C17.3333 12.2427 17.576 12 17.875 12C18.174 12 18.4167 12.2427 18.4167 12.5417ZM13.5417 12C13.2427 12 13 12.2427 13 12.5417V17.4167C13 18.6116 12.0283 19.5834 10.8333 19.5834C9.63842 19.5834 8.66667 18.6116 8.66667 17.4167V12.5417C8.66667 12.2427 8.424 12 8.125 12C7.826 12 7.58333 12.2427 7.58333 12.5417V17.4167C7.58333 19.2085 9.0415 20.6667 10.8333 20.6667C12.6252 20.6667 14.0833 19.2085 14.0833 17.4167V12.5417C14.0833 12.2427 13.8407 12 13.5417 12ZM26 4.95837V19.0417C26 21.7295 23.8127 23.9167 21.125 23.9167H4.875C2.18725 23.9167 0 21.7295 0 19.0417V4.95837C0 2.27062 2.18725 0.083374 4.875 0.083374H21.125C23.8127 0.083374 26 2.27062 26 4.95837ZM1.08333 4.95837V7.66671H24.9167V4.95837C24.9167 2.86754 23.2158 1.16671 21.125 1.16671H4.875C2.78417 1.16671 1.08333 2.86754 1.08333 4.95837ZM24.9167 19.0417V8.75004H1.08333V19.0417C1.08333 21.1325 2.78417 22.8334 4.875 22.8334H21.125C23.2158 22.8334 24.9167 21.1325 24.9167 19.0417ZM4.33333 5.50004C4.93133 5.50004 5.41667 5.01471 5.41667 4.41671C5.41667 3.81871 4.93133 3.33337 4.33333 3.33337C3.73533 3.33337 3.25 3.81871 3.25 4.41671C3.25 5.01471 3.73533 5.50004 4.33333 5.50004ZM7.58333 5.50004C8.18133 5.50004 8.66667 5.01471 8.66667 4.41671C8.66667 3.81871 8.18133 3.33337 7.58333 3.33337C6.98533 3.33337 6.5 3.81871 6.5 4.41671C6.5 5.01471 6.98533 5.50004 7.58333 5.50004ZM10.8333 5.50004C11.4313 5.50004 11.9167 5.01471 11.9167 4.41671C11.9167 3.81871 11.4313 3.33337 10.8333 3.33337C10.2353 3.33337 9.75 3.81871 9.75 4.41671C9.75 5.01471 10.2353 5.50004 10.8333 5.50004Z" fill="currentColor" />
            </svg>

        ),
        uistrategy: (className) => (
            <svg className={className} width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5423 2.19375V0H11.459V2.19375C5.1399 2.47975 0.0839844 7.69492 0.0839844 14.0833C0.0839844 20.6538 5.43023 26 12.0007 26C18.5711 26 23.9173 20.6538 23.9173 14.0833C23.9173 7.69492 18.8614 2.47975 12.5423 2.19375ZM12.5423 24.8885V22.7489H11.459V24.8885C5.91882 24.6123 1.47065 20.1641 1.1944 14.6239H3.33398V13.5406H1.1944C1.47065 8.00042 5.91882 3.55333 11.459 3.27708V5.41667H12.5423V3.27708C18.0825 3.55333 22.5306 8.00042 22.8069 13.5417H20.6673V14.625H22.8069C22.5306 20.1652 18.0825 24.6123 12.5423 24.8885ZM5.55265 7.63533L9.42123 16.6628L18.4486 20.5313L14.5801 11.5039L5.55265 7.63533ZM10.2467 15.8373L7.61532 9.698L13.7546 12.3294L16.386 18.4687L10.2467 15.8373ZM13.084 14.0833C13.084 14.6813 12.5986 15.1667 12.0007 15.1667C11.4026 15.1667 10.9173 14.6813 10.9173 14.0833C10.9173 13.4853 11.4026 13 12.0007 13C12.5986 13 13.084 13.4853 13.084 14.0833Z" fill="currentColor" />
            </svg>
        ),
        productbranding: (className) => (
            <svg className={className} width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_937_1399)">
                    <path d="M15.6667 8.125V11.375C15.6667 11.674 15.424 11.9167 15.125 11.9167C14.826 11.9167 14.5833 11.674 14.5833 11.375V8.34925L12.2585 10.6741C11.927 11.0056 11.5901 11.336 11.2499 11.6686C8.62825 14.2393 5.91667 16.8968 5.91667 20.0417C5.91667 20.3407 5.674 20.5833 5.375 20.5833C5.076 20.5833 4.83333 20.3407 4.83333 20.0417C4.83333 16.4428 7.70958 13.6229 10.4916 10.8962C10.8285 10.5668 11.1633 10.2375 11.4926 9.90925L13.8174 7.58442H10.7917C10.4927 7.58442 10.25 7.34175 10.25 7.04275C10.25 6.74375 10.4927 6.50108 10.7917 6.50108H14.0417C14.9376 6.50108 15.6667 7.22908 15.6667 8.125ZM15.5085 15.3248C15.2973 15.1136 14.9538 15.1136 14.7426 15.3248L12.9594 17.108L11.1762 15.3248C10.965 15.1136 10.6216 15.1136 10.4103 15.3248C10.1991 15.5361 10.1991 15.8795 10.4103 16.0907L12.1935 17.8739L10.4103 19.6571C10.1991 19.8683 10.1991 20.2118 10.4103 20.423C10.6216 20.6343 10.965 20.6343 11.1762 20.423L12.9594 18.6398L14.7426 20.423C14.9538 20.6343 15.2973 20.6343 15.5085 20.423C15.7198 20.2118 15.7198 19.8683 15.5085 19.6571L13.7253 17.8739L15.5085 16.0907C15.7198 15.8795 15.7198 15.5361 15.5085 15.3248ZM5.91667 11.9167C4.72175 11.9167 3.75 10.9449 3.75 9.75C3.75 8.55508 4.72175 7.58333 5.91667 7.58333C7.11158 7.58333 8.08333 8.55508 8.08333 9.75C8.08333 10.9449 7.11158 11.9167 5.91667 11.9167ZM5.91667 10.8333C6.51467 10.8333 7 10.3469 7 9.75C7 9.15308 6.51467 8.66667 5.91667 8.66667C5.31867 8.66667 4.83333 9.15308 4.83333 9.75C4.83333 10.3469 5.31867 10.8333 5.91667 10.8333ZM18.9167 5.95833V21.125C18.9167 23.8127 16.7294 26 14.0417 26H5.375C2.68725 26 0.5 23.8127 0.5 21.125V5.95833C0.5 4.45142 1.3905 3.15792 2.66667 2.54692V0.541667C2.66667 0.242667 2.90933 0 3.20833 0C3.50733 0 3.75 0.242667 3.75 0.541667V2.22192C3.92875 2.19592 4.10642 2.16667 4.29167 2.16667H5.91667V0.541667C5.91667 0.242667 6.15933 0 6.45833 0C6.75733 0 7 0.242667 7 0.541667V2.16667H9.16667V0.541667C9.16667 0.242667 9.40933 0 9.70833 0C10.0073 0 10.25 0.242667 10.25 0.541667V2.16667H12.4167V0.541667C12.4167 0.242667 12.6593 0 12.9583 0C13.2573 0 13.5 0.242667 13.5 0.541667V2.16667H15.125C15.3103 2.16667 15.4879 2.19592 15.6667 2.22192V0.541667C15.6667 0.242667 15.9093 0 16.2083 0C16.5073 0 16.75 0.242667 16.75 0.541667V2.54692C18.0262 3.15792 18.9167 4.45142 18.9167 5.95833ZM17.8333 5.95833C17.8333 4.4655 16.6189 3.25 15.125 3.25H4.29167C2.79775 3.25 1.58333 4.4655 1.58333 5.95833V21.125C1.58333 23.2158 3.28417 24.9167 5.375 24.9167H14.0417C16.1325 24.9167 17.8333 23.2158 17.8333 21.125V5.95833ZM26.5 2.70833V21.7208C26.5 22.8778 26.0493 23.9655 25.2303 24.7845L24.1741 25.8408C24.0723 25.9426 23.9347 25.9989 23.7906 25.9989C23.6465 25.9989 23.5089 25.9415 23.4071 25.8408L22.3508 24.7845C21.5318 23.9655 21.0812 22.8778 21.0812 21.7208V2.70833C21.0812 1.2155 22.2956 0 23.7895 0C25.2834 0 26.4978 1.2155 26.4978 2.70833H26.5ZM25.4167 2.70833C25.4167 1.81242 24.6876 1.08333 23.7917 1.08333C22.8958 1.08333 22.1667 1.81242 22.1667 2.70833V21.7208C22.1667 22.5886 22.5047 23.4043 23.1189 24.0186L23.7917 24.6913L24.4644 24.0186C25.0776 23.4043 25.4167 22.5886 25.4167 21.7208V2.70833Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_937_1399">
                        <rect width="26" height="26" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        sustainable: (className) => (
            <svg className={className} width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_937_1404)">
                    <path d="M26.5 13H25.4167C25.4167 6.42958 20.0704 1.08333 13.5 1.08333C9.47867 1.08333 5.73358 3.1525 3.54092 6.5H8.08333V7.58333H3.20833C2.31242 7.58333 1.58333 6.85425 1.58333 5.95833V1.08333H2.66667V5.863C5.06192 2.23925 9.13092 0 13.5 0C20.6684 0 26.5 5.83158 26.5 13ZM23.7917 18.4167H18.9167V19.5H23.4602C21.2675 22.8464 17.5213 24.9167 13.5 24.9167C6.92958 24.9167 1.58333 19.5704 1.58333 13H0.5C0.5 20.1684 6.33158 26 13.5 26C17.8691 26 21.9381 23.7607 24.3333 20.137V24.9167H25.4167V20.0417C25.4167 19.1458 24.6876 18.4167 23.7917 18.4167ZM13.019 4.57275L9.21867 11.9849C9.106 12.3543 9.17533 12.7443 9.405 13.0542C9.63575 13.364 9.98892 13.5417 10.3757 13.5417H16.6373C16.6818 13.5417 16.7143 13.5623 16.7359 13.6002C16.7576 13.6403 16.7554 13.6782 16.7023 13.7648L13.0212 20.8293L13.9821 21.3308L17.6351 14.313C17.8788 13.9458 17.9005 13.4756 17.6914 13.0878C17.4834 12.6988 17.0804 12.4572 16.6384 12.4572H10.3767C10.3247 12.4572 10.2944 12.4302 10.2771 12.4063C10.2598 12.3836 10.2446 12.3446 10.2197 12.3868L13.9832 5.06567L13.0201 4.57058L13.019 4.57275Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_937_1404">
                        <rect width="26" height="26" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>

        ),
        designsprint: (className) => (
            <svg className={className} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.14 3.3832C19.3483 0.889363 15.7505 -0.25247 11.9978 0.167863C6.13917 0.828696 1.34867 5.56611 0.607669 11.4345C0.0865861 15.5577 1.47325 19.5769 4.41234 22.4607C5.36892 23.3999 6.63317 23.9178 7.97217 23.9178H19.0341C20.3384 23.9178 21.5442 23.4552 22.4303 22.6145C25.0553 20.1229 26.5004 16.758 26.5004 13.1386C26.5004 9.41628 24.9112 5.86078 22.1411 3.38428L22.14 3.3832ZM21.6839 21.828C21.0003 22.4759 20.0589 22.8334 19.0341 22.8334H7.97109C6.917 22.8334 5.9225 22.426 5.17067 21.6872C2.47425 19.0417 1.20242 15.354 1.68234 11.5699C2.36267 6.19228 6.75125 1.8492 12.1192 1.2447C12.5883 1.19161 13.053 1.16561 13.5156 1.16561C16.4417 1.16561 19.2074 2.21645 21.4174 4.19136C23.9589 6.46311 25.416 9.72286 25.416 13.1375C25.416 16.4558 24.09 19.5433 21.6839 21.828ZM21.2073 15.874L15.6389 13.43C15.6573 13.3174 15.6671 13.2014 15.6671 13.0834C15.6671 11.8884 14.6953 10.9167 13.5004 10.9167C12.3055 10.9167 11.3338 11.8884 11.3338 13.0834C11.3338 14.2783 12.3055 15.25 13.5004 15.25C14.1894 15.25 14.8048 14.9261 15.2023 14.4224L20.7718 16.8674C20.8422 16.8978 20.9169 16.9129 20.9895 16.9129C21.1975 16.9129 21.3968 16.7927 21.4857 16.589C21.6048 16.3149 21.4813 15.9943 21.2073 15.874ZM13.5004 14.1667C12.9024 14.1667 12.4171 13.6814 12.4171 13.0834C12.4171 12.4854 12.9024 12 13.5004 12C14.0984 12 14.5838 12.4854 14.5838 13.0834C14.5838 13.6814 14.0984 14.1667 13.5004 14.1667ZM21.6438 13.0823C21.3524 13.1083 21.087 12.8764 21.0675 12.5774C20.8075 8.60811 17.4828 5.50003 13.5015 5.50003C9.32092 5.50003 5.91817 8.90278 5.91817 13.0834C5.91817 15.1861 6.80325 17.213 8.34592 18.6452C8.56475 18.8489 8.57884 19.1912 8.37409 19.41C8.26792 19.5249 8.12275 19.5834 7.97759 19.5834C7.84542 19.5834 7.71325 19.5357 7.60925 19.4382C5.84559 17.8034 4.83375 15.4873 4.83375 13.0834C4.83375 8.30478 8.72184 4.4167 13.5004 4.4167C18.0515 4.4167 21.8497 7.97003 22.1476 12.5059C22.1671 12.8049 21.9428 13.0628 21.6438 13.0823Z" fill="currentColor" />
            </svg>

        ),
        uxaudit: (className) => (
            <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_937_1415)">
                    <path d="M25.8418 25.8418C25.7357 25.948 25.597 26 25.4583 26C25.3197 26 25.181 25.9469 25.0748 25.8418L18.0884 18.8554C16.1655 20.5963 13.6251 21.6677 10.8333 21.6677C4.85983 21.6667 0 16.8068 0 10.8333C0 4.85983 4.85983 0 10.8333 0C13.2676 0 15.5664 0.788667 17.4839 2.28042C17.7201 2.4635 17.7623 2.80475 17.5782 3.04092C17.394 3.27708 17.0538 3.31933 16.8177 3.13517C15.0941 1.79292 13.0249 1.08333 10.8344 1.08333C5.45675 1.08333 1.08333 5.45783 1.08333 10.8333C1.08333 12.6252 1.57733 14.3011 2.42558 15.7452L7.53458 9.69475C7.81517 9.36325 8.22467 9.16283 8.65692 9.14442C9.08917 9.12492 9.51492 9.29067 9.82258 9.59833L12.0651 11.8408C12.1593 11.934 12.2883 11.9773 12.4161 11.9784C12.5483 11.9741 12.6685 11.9156 12.7541 11.817L22.8832 0.186333C23.0793 -0.039 23.4206 -0.0628333 23.647 0.13325C23.8723 0.329333 23.8962 0.671667 23.7001 0.897L13.5731 12.5288C13.2925 12.8527 12.8841 13.0477 12.4551 13.0618C12.0272 13.0791 11.6047 12.9112 11.3003 12.6078L9.05775 10.3643C8.96242 10.2689 8.84325 10.2212 8.7035 10.2267C8.57025 10.2321 8.45 10.2917 8.36333 10.3935L3.06367 16.6931C4.84467 19.0493 7.65917 20.5823 10.8344 20.5823C16.211 20.5823 20.5844 16.2078 20.5844 10.8322C20.5844 9.96017 20.4707 9.09675 20.2443 8.26583C20.1663 7.97658 20.3363 7.67975 20.6256 7.60067C20.9192 7.52158 21.2117 7.69275 21.2897 7.98092C21.541 8.90392 21.6688 9.86267 21.6688 10.8312C21.6688 13.6229 20.5974 16.1633 18.8565 18.0863L25.8429 25.0727C26.0542 25.2839 26.0542 25.6273 25.8429 25.8386L25.8418 25.8418Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_937_1415">
                        <rect width="26" height="26" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        ),
        uxconsult: (className) => (
            <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_937_1420)">
                    <path d="M11.885 25.0919C11.9847 25.3736 11.8374 25.6834 11.5557 25.7831C11.1505 25.9261 10.7259 25.9998 10.2915 25.9998H9.20813C7.1173 25.9998 5.41646 24.2989 5.41646 22.2081V21.8311C5.41646 19.9819 4.63863 18.2334 3.28338 17.0309C0.833964 14.862 -0.357702 11.6174 0.0972974 8.3512C0.698547 4.04711 4.27246 0.563112 8.59713 0.0669458C13.7213 -0.521304 18.4479 2.9757 19.3481 8.03053C19.4012 8.3252 19.204 8.60686 18.9105 8.65886C18.6125 8.71086 18.3352 8.51586 18.2821 8.2212C17.4826 3.72861 13.2804 0.622696 8.72063 1.14378C4.87913 1.58578 1.7028 4.67978 1.1698 8.50178C0.764631 11.4073 1.82305 14.2933 4.00055 16.2216C4.9983 17.1056 5.72846 18.242 6.13363 19.5009H9.20705V11.3304C7.67196 11.0714 6.49871 9.73353 6.49871 8.12586C6.49871 7.82686 6.74138 7.5842 7.04038 7.5842C7.33938 7.5842 7.58205 7.82686 7.58205 8.12586C7.58205 9.32078 8.5538 10.2925 9.74871 10.2925C10.9436 10.2925 11.9154 9.32078 11.9154 8.12586C11.9154 7.82686 12.158 7.5842 12.457 7.5842C12.756 7.5842 12.9987 7.82686 12.9987 8.12586C12.9987 9.73353 11.8255 11.0714 10.2904 11.3304V20.0425C10.2904 20.3415 10.0477 20.5842 9.74871 20.5842H6.3958C6.46405 20.9937 6.49871 21.4108 6.49871 21.8322V22.2092C6.49871 23.702 7.71421 24.9175 9.20705 24.9175H10.2904C10.6013 24.9175 10.9046 24.8655 11.1928 24.7637C11.4723 24.6629 11.7832 24.8103 11.884 25.093L11.885 25.0919ZM20.5831 18.4164C20.5831 19.6114 19.6114 20.5831 18.4165 20.5831C17.2215 20.5831 16.2498 19.6114 16.2498 18.4164C16.2498 17.2215 17.2215 16.2498 18.4165 16.2498C19.6114 16.2498 20.5831 17.2215 20.5831 18.4164ZM19.4998 18.4164C19.4998 17.8195 19.0145 17.3331 18.4165 17.3331C17.8185 17.3331 17.3331 17.8195 17.3331 18.4164C17.3331 19.0134 17.8185 19.4998 18.4165 19.4998C19.0145 19.4998 19.4998 19.0134 19.4998 18.4164ZM25.1331 21.0078C25.2447 21.4281 25.184 21.8658 24.9652 22.2395C24.7464 22.6144 24.3954 22.8819 23.975 22.9924C23.5569 23.1029 23.1192 23.0434 22.7422 22.8234L22.0478 22.4183C21.4671 22.948 20.7846 23.3413 20.0404 23.5753V24.3748C20.0404 25.2707 19.3113 25.9998 18.4154 25.9998C17.5195 25.9998 16.7904 25.2707 16.7904 24.3748V23.5753C16.0461 23.3413 15.3647 22.948 14.783 22.4183L14.0885 22.8234C13.7126 23.0434 13.276 23.1029 12.8557 22.9924C12.4354 22.8819 12.0844 22.6144 11.8655 22.2395C11.6467 21.8658 11.5871 21.4281 11.6965 21.0078C11.806 20.5874 12.0746 20.2354 12.4495 20.0165L13.1493 19.6081C13.0475 19.191 12.9976 18.7989 12.9976 18.4164C12.9976 18.034 13.0475 17.6419 13.1493 17.2237L12.4495 16.8153C12.0746 16.5964 11.807 16.2444 11.6965 15.824C11.586 15.4037 11.6467 14.966 11.8655 14.5923C12.0844 14.2174 12.4354 13.9509 12.8557 13.8404C13.276 13.7299 13.7137 13.7906 14.0885 14.0084L14.783 14.4135C15.3647 13.8849 16.0461 13.4905 16.7904 13.2576V12.4581C16.7904 11.5622 17.5195 10.8331 18.4154 10.8331C19.3113 10.8331 20.0404 11.5622 20.0404 12.4581V13.2576C20.7846 13.4916 21.465 13.8849 22.0478 14.4135L22.7433 14.0084C23.1192 13.7895 23.5569 13.731 23.975 13.8404C24.3954 13.9509 24.7464 14.2185 24.9652 14.5934C25.184 14.9682 25.2447 15.4059 25.1331 15.8251C25.0226 16.2454 24.7561 16.5964 24.3813 16.8164L23.6815 17.2237C23.7833 17.6408 23.8331 18.034 23.8331 18.4164C23.8331 18.7989 23.7833 19.1921 23.6815 19.6081L24.3813 20.0165C24.7572 20.2354 25.0237 20.5874 25.1331 21.0078ZM24.0855 21.2829C24.0487 21.1432 23.9599 21.0262 23.8353 20.9536L22.7747 20.3339C22.5559 20.2061 22.4551 19.945 22.531 19.7034C22.6805 19.2289 22.7498 18.8194 22.7498 18.4175C22.7498 18.0156 22.6805 17.6061 22.531 17.1305C22.4551 16.8889 22.5559 16.6279 22.7747 16.5L23.8353 15.8814C23.9599 15.8089 24.0487 15.6919 24.0855 15.5521C24.1224 15.4124 24.1029 15.2661 24.0292 15.1415C23.9566 15.0169 23.8385 14.927 23.6988 14.8913C23.5547 14.8534 23.4117 14.875 23.2882 14.9465L22.2352 15.5608C22.0185 15.6875 21.7401 15.6485 21.5679 15.4644C20.972 14.8295 20.2148 14.3929 19.3785 14.2023C19.1315 14.1459 18.957 13.9271 18.957 13.6747V12.4614C18.957 12.1624 18.7133 11.9197 18.4154 11.9197C18.1175 11.9197 17.8737 12.1624 17.8737 12.4614V13.6747C17.8737 13.9271 17.6993 14.147 17.4523 14.2023C16.616 14.3929 15.8576 14.8295 15.2629 15.4644C15.0906 15.6485 14.8111 15.6875 14.5955 15.5608L13.5436 14.9465C13.418 14.8739 13.2717 14.8534 13.133 14.8913C12.9933 14.9281 12.8763 15.0169 12.8026 15.1415C12.73 15.2672 12.7095 15.4124 12.7463 15.5521C12.7831 15.6919 12.872 15.8099 12.9965 15.8825L14.0571 16.5011C14.276 16.6279 14.3767 16.8889 14.3009 17.1305C14.1514 17.6072 14.082 18.0167 14.082 18.4175C14.082 18.8184 14.1514 19.2279 14.3009 19.7045C14.3767 19.9461 14.276 20.2072 14.0571 20.335L12.9965 20.9547C12.872 21.0273 12.782 21.1454 12.7463 21.2851C12.7095 21.4249 12.729 21.57 12.8026 21.6946C12.8752 21.8203 12.9933 21.9091 13.133 21.9459C13.2739 21.9828 13.419 21.9633 13.5436 21.8896L14.5966 21.2754C14.6811 21.2255 14.7754 21.2017 14.8696 21.2017C15.0159 21.2017 15.16 21.2602 15.264 21.3729C15.8598 22.0077 16.617 22.4443 17.4534 22.6349C17.7004 22.6913 17.8748 22.9101 17.8748 23.1625V24.3759C17.8748 24.6749 18.1185 24.9175 18.4165 24.9175C18.7144 24.9175 18.9581 24.6749 18.9581 24.3759V23.1625C18.9581 22.9101 19.1325 22.6902 19.3795 22.6349C20.2159 22.4443 20.9742 22.0077 21.569 21.3729C21.7412 21.1876 22.0196 21.1475 22.2363 21.2754L23.2893 21.8896C23.416 21.9633 23.5612 21.9817 23.6999 21.9459C23.8396 21.9091 23.9566 21.8203 24.0303 21.6957C24.1029 21.57 24.1235 21.4249 24.0866 21.2851L24.0855 21.2829Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_937_1420">
                        <rect width="26" height="26" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        ),
        accessiblity: (className) => (
            <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.66667 13C12.2514 13 15.1667 10.0848 15.1667 6.5C15.1667 2.91525 12.2514 0 8.66667 0C5.08192 0 2.16667 2.91525 2.16667 6.5C2.16667 10.0848 5.08192 13 8.66667 13ZM8.66667 1.08333C11.6534 1.08333 14.0833 3.51325 14.0833 6.5C14.0833 9.48675 11.6534 11.9167 8.66667 11.9167C5.67992 11.9167 3.25 9.48675 3.25 6.5C3.25 3.51325 5.67992 1.08333 8.66667 1.08333ZM22.4228 14.4105C22.8464 14.8341 22.8464 15.5198 22.4228 15.9423C21.9993 16.3648 21.3135 16.3659 20.891 15.9423C20.4685 15.5188 20.4674 14.833 20.891 14.4105C21.3146 13.9869 22.0003 13.9869 22.4228 14.4105ZM20.5833 10.8333C17.5966 10.8333 15.1667 13.2633 15.1667 16.25C15.1667 16.7137 15.2349 17.1795 15.3747 17.6692L14.7539 18.3062C14.6543 18.4091 14.5979 18.5478 14.6001 18.6908L14.6174 20.0417H14.0833C13.4864 20.0417 13 20.527 13 21.125V22.2083H11.9167C11.3198 22.2083 10.8333 22.6937 10.8333 23.2917V24.375C10.8333 25.2709 11.5624 26 12.4583 26H13.5438C14.2675 26 14.9478 25.7162 15.4581 25.207L19.1967 21.4673C19.6777 21.6017 20.1348 21.6677 20.5833 21.6677C23.5701 21.6677 26 19.2378 26 16.2511C26 13.2643 23.5701 10.8344 20.5833 10.8344V10.8333ZM20.5833 20.5833C20.1543 20.5833 19.7058 20.5043 19.2162 20.3385C19.0168 20.2768 18.8067 20.3244 18.6604 20.4696L14.6911 24.44C14.3856 24.7455 13.9761 24.9145 13.5417 24.9156H12.4572C12.1582 24.9156 11.9156 24.6718 11.9156 24.3739V23.2906H13.5406C13.8396 23.2906 14.0822 23.0479 14.0822 22.7489V21.1239H15.1656C15.3108 21.1239 15.4494 21.0654 15.5502 20.9636C15.6531 20.8596 15.7083 20.7198 15.7073 20.5758L15.6856 18.8998L16.3757 18.1924C16.5187 18.0462 16.5663 17.8317 16.4992 17.6388C16.3312 17.147 16.2489 16.692 16.2489 16.25C16.2489 13.8602 18.1924 11.9167 20.5823 11.9167C22.9721 11.9167 24.9156 13.8602 24.9156 16.25C24.9156 18.6398 22.9732 20.5833 20.5833 20.5833ZM12.2048 17.1253C11.1237 16.5533 9.90058 16.25 8.66667 16.25C4.485 16.25 1.08333 19.6528 1.08333 23.8333V25.4583C1.08333 25.7573 0.840667 26 0.541667 26C0.242667 26 0 25.7573 0 25.4583V23.8333C0 19.0548 3.88808 15.1667 8.66667 15.1667C10.0761 15.1667 11.4747 15.5123 12.7118 16.1666C12.9762 16.3074 13.0769 16.6346 12.9372 16.8989C12.7974 17.1632 12.4703 17.264 12.2048 17.1253Z" fill="currentColor" />
            </svg>

        ),
    };

    const IconSVG = iconMap[name];
    return IconSVG ? IconSVG(className) : null;
};

export default Icon;
