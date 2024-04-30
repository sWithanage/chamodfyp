import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import BaseLayout from "./components/BaseLayout";
import ArgonTypography from "../../components/ArgonTypography";
import { useParams } from "react-router-dom";
import { TextField, Button, Drawer, List, ListItem, ListItemText, TextareaAutosize } from "@mui/material";

function GenerateImages() {
  const [description, setDescription] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const ganTypeData = useParams('ganType');
  const isStyleGan = ganTypeData?.ganType === 'StyleGan';

  useEffect(() => {
    console.log(ganTypeData);
    console.log(isStyleGan);
  }, [ganTypeData]);

  const handleGenerateClick = () => {
    setImageUrl('http://example.com/generated-image.jpg');
    setDrawerOpen(true);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
      <BaseLayout stickyNavbar>
        <ArgonBox mt={4} sx={{ maxWidth: '1200px', margin: 'auto' }}>
          <ArgonBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
                  <ArgonBox display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2}>
                    <ArgonTypography variant="h5" fontWeight="medium">
                      {isStyleGan ? `Generate Style Gan` : `Generate DC Gan`}
                    </ArgonTypography>
                    <TextareaAutosize
                        aria-label="Description"
                        minRows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ width: '100%', padding: '10px' }}
                    />
                    <Button variant="contained" color="primary" onClick={handleGenerateClick} sx={{ width: '80%' }}>
                      Generate
                    </Button>
                  </ArgonBox>
                </Card>
              </Grid>
            </Grid>
          </ArgonBox>
        </ArgonBox>
        <Drawer anchor="bottom" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': {width: '98.5%' } }}>
          <List sx={{ width: '100%' }}>
            <ListItem>
              <ListItemText primary="Generated Image URL" secondary={imageUrl} sx={{ wordBreak: 'break-all' }} />
            </ListItem>
          </List>
        </Drawer>
      </BaseLayout>
  );
}

export default GenerateImages;
