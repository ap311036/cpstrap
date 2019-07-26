import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import AvatarPage from "./Components/AvatarPage";
import ExclusiveLabelPage from "./Components/ExclusiveLabelPage";
import EpisodeCardPage from "./Components/EpisodeCardPage";
import IconPage from "./Components/IconPage";
import PlayIconPage from "./Components/PlayIconPage";
import CardPage from "./Components/CardPage";
import ClampPage from "./Components/ClampPage";
import SlickPage from "./Components/SlickPage";
import VideoLabelPage from "./Components/VideoLabelPage";
import ShareIconPage from "./Components/ShareIconPage";
import MetaDataPage from "./Components/MetaDataPage";
import ButtonPage from "./Components/ButtonPage";
import LabelPage from "./Components/LabelPage";
import ButtonGroupPage from "./Components/ButtonGroupPage";
import ClearfixPage from './Utilities/ClearfixPage';
import ColorsPage from './Utilities/ColorsPage';
import NotFound from './NotFound';
import Components from './Components';
import Utilities from './Utilities';
import UI from './UI';

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="/components/" component={Components}>
      <IndexRedirect to="avatar/" />
      <Route path="avatar/" component={AvatarPage} />
      <Route path="button/" component={ButtonPage} />
      <Route path="buttongroup/" component={ButtonGroupPage} />
      <Route path="card/" component={CardPage} />
      <Route path="clamp/" component={ClampPage} />
      <Route path="exclusivelabel/" component={ExclusiveLabelPage} />
      <Route path="EpisodeCard/" component={EpisodeCardPage} />
      <Route path="label/" component={LabelPage} />
      <Route path="icon/" component={IconPage} />
      <Route path="metadata/" component={MetaDataPage} />
      <Route path="slick/" component={SlickPage} />
      <Route path="shareicon/" component={ShareIconPage} />
      <Route path="playicon/" component={PlayIconPage} />
      <Route path="videolabel/" component={VideoLabelPage} />
    </Route>
    <Route path="/utilities/" component={Utilities}>
      <IndexRedirect to="colors/" />
      <Route path="colors/" component={ColorsPage} />
      <Route path="clearfix/" component={ClearfixPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
