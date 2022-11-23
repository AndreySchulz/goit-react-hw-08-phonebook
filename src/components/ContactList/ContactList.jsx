import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

import { getFilterContacts } from 'redux/contacts/contactsSelectors';
import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);

  return (
    <Box sx={{ width: '50%' }}>
      <Stack spacing={2}>
        {contacts.map(({ name, number, id }) => {
          return (
            <Grid
              component="span"
              sx={{
                p: 2,
                border: '1px solid #80808029',
                borderRadius: '5px',
                backgroundColor: 'white',
              }}
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              key={id}
            >
              {name} : {number}
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </Button>
            </Grid>
          );
        })}
      </Stack>
    </Box>
  );
};
export default ContactList;
