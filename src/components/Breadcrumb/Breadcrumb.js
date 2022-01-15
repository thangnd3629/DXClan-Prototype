import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BasicBreadcrumbs({ crumbs }) {
  return (
    <div role='presentation'>
      <Breadcrumbs
        aria-label='breadcrumb'
        separator={<NavigateNextIcon fontSize='small' />}
      >
        <Link underline='hover' color='inherit' href='/'>
          <i className='fas fa-home mr-2'></i>
          Trang chủ
        </Link>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          const isHome = crumb.path === "/";
          if (isHome) {
            return null;
          }
          return isLast ? (
            <Typography color='text.primary' variant='p'>
              <i className={`${crumb.icon} mr-2`}></i>
              {crumb.name}
            </Typography>
          ) : (
            <Link underline='hover' color='inherit' href={crumb.path}>
              <i className={`${crumb.icon} mr-2`}></i>
              {crumb.name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
