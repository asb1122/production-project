import { t } from "i18next";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>{t("Loading...")}</div>}>
            <Routes>
                {Object.values(routerConfig).map(({element, path}) => (
                    <Route 
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<div>{t("Loading...")}</div>}>
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;