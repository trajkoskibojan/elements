import React, { useContext } from 'react';
import {
  Grid,
  Box,
  DialogContent,
  IconButton,
  Dialog,
} from '@material-ui/core';
import { Context } from 'context/context';
import CloseIcon from '@material-ui/icons/Close';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

const DialogWiki = (props) => {
  const { show, closeDialog, screen, fullScreen, language, link } = useContext(
    Context
  );

  return (
    <Dialog open={show} onClose={closeDialog} fullScreen={screen} keepMounted>
      <DialogContent style={{ height: '80vh' }}>
        <Grid container justify="flex-end">
          <Grid item>
            <IconButton aria-label="icon" onClick={fullScreen}>
              {screen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="icon" onClick={closeDialog}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box height="90%">
          {
            <iframe
              title="hello"
              src={
                language
                  ? `https://en.wikipedia.org/wiki/${link}`
                  : `https://mk.wikipedia.org/wiki/${link}`
              }
              width="100%"
              height="100%"
            ></iframe>
          }
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default DialogWiki;
