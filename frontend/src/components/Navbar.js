import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';
import Services from '../containers/Services';

const Navbar = () => {
  const { access_token } = getToken();

  const buttonStyle = {
    color: 'white',
    textTransform: 'none',
    backgroundColor: '#6d1b7b',
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Geek-Shop
          </Typography>

          <Button
            component={NavLink}
            to="/"
            sx={{
              ...buttonStyle,
              backgroundColor: 'transparent',
              '&.active': {
                backgroundColor: buttonStyle.backgroundColor,
              },
            }}
            className="active"
          >
            Home
          </Button>

          <Button
            component={NavLink}
            to="/contact"
            sx={{
              ...buttonStyle,
              backgroundColor: 'transparent',
              '&.active': {
                backgroundColor: buttonStyle.backgroundColor,
              },
            }}
            className="active"
          >
            Contact
          </Button>
          <Button
            component={NavLink}
            to="/about"
            sx={{
              ...buttonStyle,
              backgroundColor: 'transparent',
              '&.active': {
                backgroundColor: buttonStyle.backgroundColor,
              },
            }}
            className="active"
          >
            About
          </Button>
          <Button
              component={NavLink}
              to="/services"
            sx={{
              ...buttonStyle,
              backgroundColor: 'transparent',
              '&.active': {
                backgroundColor: buttonStyle.backgroundColor,
              },
            }}
            className="active"
          >
            Services
          </Button>

{/* if access+_token is true show dashboard */}
          {access_token ? (
            <Button
              component={NavLink}
              to="/dashboard"
              sx={{
                ...buttonStyle,
                backgroundColor: 'transparent',
                '&.active': {
                  backgroundColor: buttonStyle.backgroundColor,
                },
              }}
              className="active"
            >
              Dashboard
            </Button>
          ) : (
            // else show login/registration page
            <Button
              component={NavLink}
              to="/login"
              sx={{
                ...buttonStyle,
                backgroundColor: 'transparent',
                '&.active': {
                  backgroundColor: buttonStyle.backgroundColor,
                },
              }}
              className="active"
            >
              Login/Registration
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
